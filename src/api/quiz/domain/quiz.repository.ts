import { QuizFormSchema } from "@/schemas/create-quiz.schema";
import { Quiz } from "./model/quiz";

export type TQuizRepository = {
  list: () => Promise<Quiz[]>;
  get: (id: string) => Promise<Quiz>;
  create: (quiz: QuizFormSchema) => Promise<Quiz>;
  update: (id: string, quiz: QuizFormSchema) => Promise<Quiz>;
  delete: (id: string) => Promise<boolean>;
};
