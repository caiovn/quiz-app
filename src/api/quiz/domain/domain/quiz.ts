import { Question } from "./question";

export type Quiz = {
  id?: string;
  name: string;
  description: string;
  questions: Question[];
};
