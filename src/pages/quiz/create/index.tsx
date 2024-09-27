import { Button, Input } from "@/components";
import {
  quizFormSchema,
  QuizFormSchema,
  QuizFormSubmitHandler,
} from "@/schemas/create-quiz.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./create.module.css";

export default function Create() {
  const [data, setData] = useState<QuizFormSchema>();
  const quizForm = useForm<QuizFormSchema>({
    resolver: zodResolver(quizFormSchema),
    defaultValues: {},
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = quizForm;

  const onSubmit: QuizFormSubmitHandler = (res) => {
    setData(res);
    console.log(res);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input register={register("name")} label="Nome" error={errors.name} />
        <Input
          register={register("description")}
          label="Descrição"
          error={errors.description}
        />

        <Button className={styles.button} variant="primary" type="submit">
          Enviar
        </Button>
      </form>
      {data && JSON.stringify(data)}
    </>
  );
}
