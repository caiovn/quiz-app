import { Quiz } from "../domain/model/quiz";

export const QUIZ_LIST_MOCK: Quiz[] = [
  {
    id: "dcd00bea-be1f-4ea8-abbe-5364641b1aa0",
    name: "Quiz sobre animais marinhos",
    description:
      "Teste seus conhecimento sobre os misteriosos animais marinhos!",
    questions: [
      {
        title: "Qual é o maior animal marinho?",
        correctAnswer: "2",
        answers: [
          {
            index: "0",
            text: "Tubarão-baleia",
          },
          { index: "1", text: "Orca" },
          { index: "2", text: "Baleia-azul" },
          { index: "3", text: "Lula-gigante" },
        ],
      },
      {
        title: "Os polvos têm três corações?",
        correctAnswer: "1",
        answers: [
          { index: "0", text: "Não" },
          { index: "1", text: "Sim" },
        ],
      },
      {
        title:
          "Qual desses animais marinhos é conhecido por seu veneno mortal?",
        correctAnswer: "0",
        answers: [
          { index: "0", text: "Polvo-de-anéis-azuis" },
          { index: "1", text: "Tubarão-martelo" },
          {
            index: "2",
            text: "Golfinho",
          },
          { index: "3", text: "Foca-leopardo" },
        ],
      },
      {
        title: "Quantas espécies de tartarugas marinhas existem?",
        correctAnswer: "3",
        answers: [
          { index: "0", text: "3 espécies" },
          { index: "1", text: "5 espécies" },
          {
            index: "2",
            text: "9 espécies",
          },
          { index: "3", text: "7 espécies" },
        ],
      },
    ],
  },
];
