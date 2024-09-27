import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

export const quizFormSchema = z.object({
  name: z
    .string({ required_error: "Nome é um campo obrigatório" })
    .min(3, "Nome deve conter no minimo 3 caracteres")
    .max(50, "Numero de caracteres excedido"),
  description: z
    .string()
    .min(3, "Descrição deve conter no minimo 3 caracteres")
    .max(350, "Numero de caracteres excedido"),
});

export type QuizFormSchema = z.infer<typeof quizFormSchema>;

export type QuizFormSubmitHandler = SubmitHandler<QuizFormSchema>;
