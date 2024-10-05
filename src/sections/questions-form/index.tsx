import { Button, Icon, Input } from "@/components";
import styles from "./questions-form.module.css";
import { QuizFormSchema } from "@/schemas/create-quiz.schema";
import React from "react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import AnswersFormArray from "../answers-form";
import { appendQuestion } from "@/funcs/quiz.func";
import cn from "classnames";

type AnswersFormArrayProps = {
  form: UseFormReturn<QuizFormSchema>;
};

export default function QuestionsForm({ form }: AnswersFormArrayProps) {
  const {
    control,
    register,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray<QuizFormSchema>({
    control,
    name: "questions",
  });

  return (
    <>
      <div className={styles.questionsTitle}>
        <h2>Perguntas</h2>
        <Button
          aria-label="Adicionar nova pergunta"
          data-testid="question-form-add"
          variant="tertiary"
          type="button"
          onClick={() => append(appendQuestion())}
        >
          <Icon>add</Icon>
        </Button>
      </div>
      {errors.questions && (
        <span
          data-testid={`question-form-error-message`}
          className={cn("body-s-regular", styles.questionsErrorsMessage)}
        >
          {errors.questions.message}
        </span>
      )}
      <div className={styles.questionWrapper}>
        {fields.map((q, index) => (
          <div key={q.id} className={styles.questionItem}>
            <Button
              aria-label={`Apagar pergunta ${index + 1}`}
              data-testid={`question-form-delete-${index}-btn`}
              className={styles.deleteBtn}
              variant="tertiary"
              type="button"
              onClick={() => remove(index)}
            >
              <Icon>delete</Icon>
            </Button>
            <Input
              label={`Título da pergunta #${index + 1}`}
              inputProps={{
                placeholder: `Pergunta ${index + 1}`,
                ["data-testid"]: `question-form-title-${index}-input`,
              }}
              register={register(`questions.${index}.title`)}
              error={errors.questions?.[index]?.title}
            ></Input>
            <AnswersFormArray form={form} nestedIndex={index} />
          </div>
        ))}
      </div>
    </>
  );
}
