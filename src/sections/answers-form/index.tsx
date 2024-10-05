import styles from "./answers-form.module.css";
import { Select, Input, Button, Icon } from "@/components";
import { defaultAnswerValue } from "@/funcs/quiz.func";
import { QuizFormSchema } from "@/schemas/create-quiz.schema";
import cn from "classnames";
import { UseFormReturn, useFieldArray } from "react-hook-form";

type AnswersFormArrayProps = {
  form: UseFormReturn<QuizFormSchema>;
  nestedIndex: number;
};

export default function AnswersFormArray({
  nestedIndex,
  form,
}: AnswersFormArrayProps) {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    rules: { maxLength: 4, minLength: 4 },
    control,
    name: `questions.${nestedIndex}.answers`,
  });

  const watchAnswers =
    watch(`questions`)?.[nestedIndex]?.answers?.map((o, index) => ({
      label: o.text || defaultAnswerValue(index),
      value: index,
    })) || [];

  console.log(errors);

  return (
    <div>
      <div className={styles.correctAnswerContainer}>
        <Select
          inputProps={{
            ["data-testid"]: `answer-form-correct-select-${nestedIndex}`,
          }}
          label="Resposta correta"
          register={register(`questions.${nestedIndex}.correctAnswer`)}
          options={watchAnswers}
        />
        {fields.length < 4 && (
          <div className={styles.addbtn}>
            <Button
              data-testid={`answer-form-add-${nestedIndex}}`}
              variant="tertiary"
              type="button"
              onClick={() => append({ text: "" })}
            >
              <Icon>add</Icon>
            </Button>
          </div>
        )}
      </div>
      {errors.questions?.[nestedIndex]?.answers && (
        <span
          data-testid={`answer-form-error-message-${nestedIndex}`}
          className={cn("body-s-regular", styles.answersErrorMessage)}
        >
          {errors.questions?.[nestedIndex]?.answers.message}
        </span>
      )}
      <div className={styles.answersList}>
        {fields.map((answers, index) => {
          return (
            <div className={styles.answerItem} key={answers.id}>
              <Input
                label={`Resposta #${index + 1}`}
                inputProps={{
                  placeholder: defaultAnswerValue(index),
                  ["data-testid"]: `answer-form-input-${nestedIndex}-${index}`,
                }}
                register={register(
                  `questions.${nestedIndex}.answers.${index}.text`
                )}
                error={errors.questions?.[nestedIndex]?.answers?.[index]?.text}
              ></Input>
              <div>
                <Button
                  aria-label={`Apagar resposta ${index + 1}`}
                  data-testid={`answer-form-delete-${nestedIndex}-${index}`}
                  className={styles.deleteBtn}
                  variant="tertiary"
                  type="button"
                  onClick={() => remove(index)}
                >
                  <Icon>delete</Icon>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
