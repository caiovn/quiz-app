import { QuizFormSchema } from "@/schemas/create-quiz.schema";
import { Quiz } from "../../domain/model/quiz";

export const quizMapper = {
  mapFromSchema: (param: QuizFormSchema): Quiz => {
    return {
      name: param.name,
      description: param.description,
      questions: param.questions.map((q) => ({
        title: q.title,
        correctAnswer: q.correctAnswer,
        answers: q.answers.map((answer, answerIndex) => ({
          index: `${answerIndex}`,
          text: answer.text,
        })),
      })),
    };
  },
};
