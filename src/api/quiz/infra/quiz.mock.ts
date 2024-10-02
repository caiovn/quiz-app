import { Quiz } from "../domain/domain/quiz";

export const QUIZ_LIST_MOCK: Quiz[] = [
  {
    id: "1",
    name: "Quiz do Caio",
    description:
      "Curiosidades sobre o Caio. Texto gigantesco para acontecer uma quebra de linha e depois colocar um elipsis",
    questions: [
      {
        title: "Qual o nome dos gatos dele?",
        correctAnswer: "1",
        answers: [
          {
            index: "1",
            text: "Tonico e Tinoco",
          },
          { index: "2", text: "Tom e Jerry" },
          { index: "3", text: "Tico e Teco" },
          { index: "4", text: "Fred e Barney" },
        ],
      },
      {
        title: "Qual o nome dos cachorro dele?",
        correctAnswer: "3",
        answers: [
          { index: "1", text: "Joca" },
          { index: "2", text: "Thor" },
          {
            index: "3",
            text: "Theo",
          },
          { index: "4", text: "baby" },
        ],
      },
      {
        title: "Qual o dia do aniversario dele?",
        correctAnswer: "4",
        answers: [
          { index: "1", text: "28 de outubro" },
          { index: "2", text: "24 de julho" },
          {
            index: "3",
            text: "27 de outubro",
          },
          { index: "4", text: "11 de agosto" },
        ],
      },
      {
        title: "Ele trabalha com o que?",
        correctAnswer: "3",
        answers: [
          { index: "1", text: "Java" },
          { index: "2", text: "Python" },
          {
            index: "3",
            text: "Javascript",
          },
          { index: "4", text: "COBOL" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Quiz do Caio 2",
    description: "Curiosidades sobre o Caio",
    questions: [
      {
        title: "Qual o nome dos gatos dele?",
        correctAnswer: "1",
        answers: [
          {
            index: "1",
            text: "Tonico e Tinoco",
          },
          { index: "2", text: "Tom e Jerry" },
          { index: "3", text: "Tico e Teco" },
          { index: "4", text: "Fred e Barney" },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Quiz do Caio 3",
    description: "Curiosidades sobre o Caio",
    questions: [
      {
        title: "Qual o nome dos gatos dele?",
        correctAnswer: "1",
        answers: [
          {
            index: "1",
            text: "Tonico e Tinoco",
          },
          { index: "2", text: "Tom e Jerry" },
          { index: "3", text: "Tico e Teco" },
          { index: "4", text: "Fred e Barney" },
        ],
      },
    ],
  },
];
