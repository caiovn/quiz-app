import { QuizMockRepository } from "../infra/quiz.mock.repository";
import { TQuizRepository } from "./quiz.repository";

export const QuizAdapter: Record<"mock" | "http", TQuizRepository> = {
  mock: QuizMockRepository,
  http: QuizMockRepository,
};
