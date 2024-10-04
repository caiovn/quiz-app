import { Quiz } from "@/api/quiz/domain/model/quiz";
import { QuizApi } from "@/api/quiz/quiz.api";
import { Button, Icon, QuizCard } from "@/components";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import styles from "./quiz.module.css";
import { LoadingContext } from "@/providers/loading.provider";
import { QuizCardButton } from "@/components/quiz-card";
import ModalTemplate, { ModalTemplateOnClose } from "@/sections/modal-template";

export default function QuizList() {
  const setLoading = useContext(LoadingContext);
  const router = useRouter();
  const [quizList, setQuizList] = useState<Quiz[]>();
  const [showPortal, setShowPortal] = useState(false);

  const getQuizList = useCallback(() => {
    console.log("get quizzes");
    QuizApi.list().then(
      (res) => {
        console.log(res);
        setQuizList(res);
        setLoading(false);
      },
      (err) => {
        setQuizList([]);
        console.error(err);
      }
    );
  }, [setLoading]);

  useEffect(() => {
    setLoading(true);
    getQuizList();
  }, [getQuizList, setLoading]);

  const clickPlayQuiz = (quiz: Quiz) => {
    router.push({ pathname: "/quiz/play/[id]", query: { id: quiz.id } });
  };

  const clickEditCard = (quiz: Quiz) => {
    setLoading(true);
    router.push({ pathname: "/quiz/edit/[id]", query: { id: quiz.id } });
  };

  const clickDeleteCard = (quiz: Quiz) => {
    setSelectedQuizId(quiz.id!);
    setShowPortal(true);
  };

  const [selectedQuizId, setSelectedQuizId] = useState<string>("");

  const handleCloseModal = (data: ModalTemplateOnClose) => {
    setShowPortal(false);
    console.log(data);
    if (data != "CONFIRM") {
      setSelectedQuizId("");
      return;
    }
    setLoading(true);
    QuizApi.delete(selectedQuizId).then(
      () => {
        setSelectedQuizId("");
        getQuizList();
        setLoading(false);
      },
      (err) => {
        setSelectedQuizId("");
        console.error(err);
      }
    );
  };

  const mountButtons = (quiz: Quiz): QuizCardButton[] => [
    {
      label: "Jogar",
      onClick: () => clickPlayQuiz(quiz),
      variant: "primary",
    },
    {
      label: "Editar",
      onClick: () => clickEditCard(quiz),
      variant: "secondary",
    },
    {
      label: "Excluir",
      onClick: () => clickDeleteCard(quiz),
      variant: "tertiary",
    },
  ];

  return (
    <>
      <div className={styles.header}>
        <h1 className="heading-m-bold">Quizzes</h1>
        <Button
          onClick={() => router.push("/quiz/create")}
          className={styles.createButton}
          variant="primary"
        >
          <Icon color="inverse">add</Icon>&nbsp;Criar
        </Button>
      </div>
      <>
        {quizList && quizList.length > 0 ? (
          <div className={styles.cardsContainer}>
            {quizList.map((quiz, index) => (
              <QuizCard key={index} quiz={quiz} buttons={mountButtons(quiz)} />
            ))}

            {showPortal && (
              <ModalTemplate
                title="Quer realmente excluir?"
                subTitle="É uma ação que não pode ser desfeita."
                confirmButtonText="Sim, excluir"
                cancelButtonText="Cancelar"
                onClose={handleCloseModal}
              />
            )}
          </div>
        ) : (
          <Blankslate></Blankslate>
        )}
      </>
    </>
  );
}

function Blankslate() {
  return (
    <>
      <h1 className="heading-xl-bold">Quizzes</h1>
      <h2 className="body-l-medium">
        Poxa... parece que ainda não existe nenhum quiz :(
      </h2>
      <p className="body-m-regular">Que tal criar o seu?</p>
    </>
  );
}
