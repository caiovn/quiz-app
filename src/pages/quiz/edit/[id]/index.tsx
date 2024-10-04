"use client";
import { useRouter } from "next/router";
import Create from "../../create";
import { useEffect, useState } from "react";
import { QuizApi } from "@/api/quiz/quiz.api";
import { Quiz } from "@/api/quiz/domain/model/quiz";

export default function Edit() {
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz>();

  useEffect(() => {
    const id = String(router.query.id);
    if (!id) return;
    QuizApi.get(id).then(
      (res) => {
        setQuiz(res);
      },
      () => {
        router.push("/quiz");
      }
    );
  }, [router]);
  return <>{quiz && <Create isEdit={true} quiz={quiz} id={quiz.id} />}</>;
}
