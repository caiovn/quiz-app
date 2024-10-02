import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

export const answersArrayFormSchema = z.object({
  text: z
    .string({ required_error: "Pergunta é um campo obrigatório" })
    .min(1, { message: "Pergunta é um campo obrigatório" }),
});

export const questionsArrayFormSchema = z.object({
  title: z
    .string({ required_error: "Titulo é um campo obrigatório" })
    .min(1, { message: "Titulo é um campo obrigatório" }),
  correctAnswer: z.string({
    required_error: "Pergunta correta é um campo obrigatório",
  }),
  answers: answersArrayFormSchema
    .array()
    .min(2, { message: "É necessário ter menos 2 (duas) perguntas" }),
});

export const quizFormSchema = z.object({
  name: z
    .string({
      message: "Valor inválido",
      required_error: "Nome é um campo obrigatório",
    })
    .min(3, { message: "Nome deve conter no minimo 3 caracteres" })
    .max(50, { message: "Numero de caracteres excedido" }),
  description: z
    .string()
    .max(350, { message: "Numero de caracteres excedido" }),
  questions: z
    .array(questionsArrayFormSchema)
    .min(1, { message: "É necessário pelo menos uma pergunta" }),
});

export type QuizFormSchema = z.infer<typeof quizFormSchema>;
export type QuestionsArrayFormSchema = z.infer<typeof questionsArrayFormSchema>;
export type AnswersArrayFormSchema = z.infer<typeof answersArrayFormSchema>;

export type QuizFormSubmitHandler = SubmitHandler<QuizFormSchema>;
