export type Question = {
  id?: string;
  title: string;
  correctAnswer: string;
  answers: {
    index: string;
    text: string;
  }[];
};
