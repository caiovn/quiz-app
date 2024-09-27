import { Button } from "@/components";
import { useRouter } from "next/router";

export default function Quiz() {
  const router = useRouter();
  const navigateCreateQuiz = () => {
    router.push("/quiz/create");
  };

  return (
    <div>
      <h1 className="heading-xl-bold">Quizzes</h1>
      <h2 className="body-l-medium">
        Poxa... parece que ainda não existe nenhum quiz :(
      </h2>
      <p className="body-m-regular">Que tal criar o seu?</p>
      <Button variant="primary" onClick={navigateCreateQuiz}>
        Crie seu quiz
      </Button>
    </div>
  );
}
