import { Button, Input, LoadingSpinner } from "@/components";
import {
  quizFormSchema,
  QuizFormSchema,
  QuizFormSubmitHandler,
} from "@/schemas/create-quiz.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./create.module.css";
import { QuizApi } from "@/api/quiz/quiz.api";
import { useRouter } from "next/router";
import { appendQuestion } from "@/funcs/quiz.func";
import QuestionsForm from "../../../sections/questions-form";
import { LoadingContext } from "@/providers/loading.provider";
import { Quiz } from "@/api/quiz/domain/domain/quiz";

const initialValue: QuizFormSchema = {
  name: "",
  description: "",
  questions: [appendQuestion()],
};

type CreateProps = { quiz?: Quiz; isEdit?: boolean };

export default function Create(props: CreateProps) {
  const setLoading = useContext(LoadingContext);
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [quiz, setQuiz] = useState<Quiz>();

  const quizForm = useForm<QuizFormSchema>({
    resolver: zodResolver(quizFormSchema),
    defaultValues: initialValue,
    mode: "onBlur",
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = quizForm;

  const patchForm = useCallback(() => {
    setValue("name", quiz!.name);
    setValue("description", quiz!.description);
    setValue("questions", quiz!.questions);
  }, [quiz, setValue]);

  const setEditProps = useCallback(() => {
    if (props.isEdit) setIsEdit(props.isEdit);
    if (props.quiz) setQuiz(props.quiz);
  }, [props]);

  useEffect(() => {
    setLoading(true);
    setEditProps();

    if (!isEdit) {
      setLoading(false);
      return;
    }

    patchForm();
    setLoading(false);
  }, [setEditProps, setLoading, patchForm, isEdit]);

  const onSubmit: QuizFormSubmitHandler = (data) => {
    setLoading(true);
    const operation = isEdit
      ? QuizApi.update(quiz!.id!, data)
      : QuizApi.create(data);
    operation
      .then(() => {
        return router.push("/quiz");
      })
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1 className="heading-m-bold">
        {isEdit ? "Editar quiz" : "Criar novo quiz"}
      </h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register("name")}
          label="Nome"
          error={errors.name}
          inputProps={{ maxLength: 30 }}
        />
        <Input
          register={register("description")}
          label="Descrição"
          error={errors.description}
          inputProps={{ maxLength: 350 }}
        />

        <QuestionsForm form={quizForm} />

        <Button
          className={styles.button}
          disabled={!isValid}
          variant="primary"
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}
