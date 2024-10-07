/* eslint-disable @typescript-eslint/no-unused-expressions */
import styles from "./play.module.css";
import { Quiz } from "@/api/quiz/domain/model/quiz";
import { QuizApi } from "@/api/quiz/quiz.api";
import { Button } from "@/components";
import { LoadingContext } from "@/providers/loading.provider";
import cn from "classnames";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";

type AnswerFeedbackMessage = "success" | "fail" | "delayed" | "finished";

export default function Play() {
  const setLoading = useContext(LoadingContext);
  const router = useRouter();
  const [score, setScore] = useState<number>(0);
  const [quiz, setQuiz] = useState<Quiz>();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState<
    AnswerFeedbackMessage | undefined
  >(undefined);
  const answerFeedbackMessage: Record<AnswerFeedbackMessage, string> = {
    delayed: "Tempo esgotado",
    fail: "Resposta errada",
    success: "Resposta correta",
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
    }, 3000);
  }, [questionIndex, quiz]);

  useEffect(() => {
    setLoading(true);
    const id = String(router.query.id || "");

    if (!id) return;

    QuizApi.get(id).then(
      (res) => {
        setQuiz(res);
        setLoading(false);
      },
      () => {
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

    if (selectedAnswer !== correctAnswer) {
      setAnswerFeedback("fail");
    } else {
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
        <div className={styles.playQuizWrapper}>
          {!answerFeedback ? (
            <>
              <span className={cn(styles.generalInfo, "body-m-regular")}>
                <p>
                  {`${questionIndex + 1} de ${quiz.questions.length} perguntas`}
                </p>
                {counter && (
                  <p>
                    TIMER:&nbsp;
                    <strong>{counter}</strong>
                  </p>
                )}
              </span>
              <div className={styles.questionWrapper}>
                <h1 className="heading-l-bold">{quiz.name}</h1>
                <div>
                  <p className="heading-s-medium">
                    {quiz.questions[questionIndex].title}
                  </p>
                  <div className={styles.answersWrapper}>
                    {quiz.questions[questionIndex].answers.map((a) => (
                      <Button
                        variant="secondary"
                        size="large"
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
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={cn("heading-l-bold", styles.answerFeedback)}>
              <p>{answerFeedbackMessage[answerFeedback]}</p>
              {answerFeedback === "finished" && (
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => router.push("/quiz")}
                >
                  Voltar para home
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
