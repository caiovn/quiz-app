import { v4 as uuidV4 } from "uuid";
import { Quiz } from "../domain/domain/quiz";
import { TQuizRepository } from "../domain/quiz.repository";
import { QUIZ_LIST_MOCK } from "./quiz.mock";
import { QuizFormSchema } from "@/schemas/create-quiz.schema";
import { quizMapper } from "./mappers/quiz.mapper";

export const QuizMockRepository: TQuizRepository = {
  list: function (): Promise<Quiz[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(QUIZ_LIST_MOCK);
      }, 1000);
    });
  },
  get: function (id: string): Promise<Quiz> {
    return new Promise((resolve, reject) => {
      const retrievedQuiz = QUIZ_LIST_MOCK.find((q) => q.id === id);
      console.log("get", id, retrievedQuiz);
      setTimeout(() => {
        if (!!!retrievedQuiz) {
          reject("Quiz não encontrado");
          return;
        }
        resolve(retrievedQuiz);
      }, 1000);
    });
  },
  create: (quiz: QuizFormSchema) => {
    const mappedQuiz = quizMapper.mapFromSchema(quiz);
    QUIZ_LIST_MOCK.push({ ...mappedQuiz, id: uuidV4() });
    return new Promise((resolve) =>
      setTimeout(() => resolve(mappedQuiz), 2000)
    );
  },
  update: (id: string, quiz: QuizFormSchema) => {
    const index = QUIZ_LIST_MOCK.findIndex((q) => q.id === id);
    return new Promise((resolve, reject) => {
      if (index === -1) {
        reject("Esse quiz não existe");
        return;
      }
      const mappedQuiz = quizMapper.mapFromSchema(quiz);
      QUIZ_LIST_MOCK[index] = { ...QUIZ_LIST_MOCK[index], ...mappedQuiz };
      resolve(QUIZ_LIST_MOCK[index]);
    });
  },
  delete: (id: string) => {
    const index = QUIZ_LIST_MOCK.findIndex((q) => q.id === id);
    if (index !== -1) QUIZ_LIST_MOCK.splice(index, 1);
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 2000);
    });
  },
};
