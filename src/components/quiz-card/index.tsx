import { Quiz } from "@/api/quiz/domain/domain/quiz";
import Button, { ButtonVariant } from "../button";
import styles from "./quiz-card.module.css";
import cn from "classnames";

export type QuizCardButton = {
  label: string;
  variant: ButtonVariant;
  onClick: () => void;
};

export type QuizCardProps = {
  quiz: Quiz;
  buttons: QuizCardButton[];
};

export default function QuizCard({ quiz, buttons }: QuizCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.data}>
        <h3 className="body-l-medium">{quiz.name}</h3>
        <p
          title={quiz.description}
          className={cn("body-s-regular", styles.description)}
        >
          {quiz.description}
        </p>
      </div>
      <div className={styles.buttons}>
        {buttons.map((b, index) => (
          <Button key={index} variant={b.variant} onClick={b.onClick}>
            {b.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
