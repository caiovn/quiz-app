import {
  QuestionsArrayFormSchema,
  AnswersArrayFormSchema,
} from "@/schemas/create-quiz.schema";

export const defaultAnswerValue = (index: number) => `Resposta ${index + 1}`;

export const appendQuestion = (): QuestionsArrayFormSchema => {
  const answers: AnswersArrayFormSchema[] = Array.from({ length: 4 }, () => ({
    text: "",
  }));
  return {
    answers,
    correctAnswer: "0",
    title: "",
  };
};
