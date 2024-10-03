/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Quiz } from "@/api/quiz/domain/domain/quiz";
import { QuizApi } from "@/api/quiz/quiz.api";
import { Button } from "@/components";
import { LoadingContext } from "@/providers/loading.provider";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";

export default function Play() {
  const setLoading = useContext(LoadingContext);
  const router = useRouter();
  const [score, setScore] = useState<number>(0);
  const [quiz, setQuiz] = useState<Quiz>();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState<
    "success" | "fail" | "delayed" | "finished" | undefined
  >(undefined);
  const answerFeedbackMessage: Record<
    "success" | "fail" | "delayed" | "finished",
    string
  > = {
    delayed: "esqueceu de responde :(",
    fail: "ERRRROUUUU!",
    success: "ACERTOUUUU",
    finished: `Quiz terminado! Você acertou ${score} de ${quiz?.questions.length}`,
  };

  const [counter, setCounter] = useState<number | undefined>(20);

  const nextQuestion = useCallback(() => {
    setCounter(undefined);
    setTimeout(() => {
      if (questionIndex + 1 === quiz?.questions.length) {
        setAnswerFeedback("finished");
        return;
      }

      setAnswerFeedback(undefined);
      setQuestionIndex((current) => current + 1);
      setCounter(20);

      console.log(questionIndex);
    }, 3000);
  }, [questionIndex, quiz]);

  useEffect(() => {
    console.log("triggou");
    setLoading(true);
    const id = String(router.query.id || "");
    console.log(id);

    if (!id) return;

    QuizApi.get(id).then(
      (res) => {
        setQuiz(res);
        setLoading(false);
      },
      () => {
        console.log("push", id);
        router.push("/quiz");
      }
    );
  }, [router, setLoading]);

  useEffect(() => {
    if (counter === undefined) return;
    if (counter > 0) {
      setTimeout(() => setCounter((c) => (c ? c - 1 : undefined)), 1000);
      return;
    }

    setAnswerFeedback("delayed");
    nextQuestion();
  }, [counter, nextQuestion]);

  const verifyAnswer = (selectedAnswer: string, correctAnswer: string) => {
    setCounter(undefined);

    console.log(selectedAnswer, correctAnswer);

    if (selectedAnswer !== correctAnswer) {
      setAnswerFeedback("fail");
      console.log("fail");
    } else {
      console.log("success");
      setAnswerFeedback("success");
      incrementScore();
    }

    nextQuestion();
  };

  const incrementScore = () => {
    setScore((s) => s + 1);
  };

  return (
    <>
      {quiz && (
        <div>
          {!answerFeedback ? (
            <>
              {`${questionIndex + 1} de ${quiz.questions.length} perguntas`}
              {counter && <p>{`TIMER: ${counter}`}</p>}
              <h1 className="heading-l-bold">{quiz.name}</h1>
              {quiz.questions[questionIndex].title}
              {quiz.questions[questionIndex].answers.map((a) => (
                <Button
                  variant="secondary"
                  key={a.index}
                  disabled={!!answerFeedback}
                  onClick={() =>
                    verifyAnswer(
                      a.index,
                      quiz.questions[questionIndex].correctAnswer
                    )
                  }
                >
                  {a.text}
                </Button>
              ))}
            </>
          ) : (
            <>
              <p className="body-l-bold">
                {answerFeedbackMessage[answerFeedback]}
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}
