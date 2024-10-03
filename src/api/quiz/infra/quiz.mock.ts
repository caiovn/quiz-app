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
        correctAnswer: "0",
        answers: [
          {
            index: "0",
            text: "Tonico e Tinoco",
          },
          { index: "1", text: "Tom e Jerry" },
          { index: "2", text: "Tico e Teco" },
          { index: "3", text: "Fred e Barney" },
        ],
      },
      {
        title: "Qual o nome dos cachorro dele?",
        correctAnswer: "2",
        answers: [
          { index: "0", text: "Joca" },
          { index: "1", text: "Thor" },
          {
            index: "2",
            text: "Theo",
          },
          { index: "3", text: "baby" },
        ],
      },
      {
        title: "Qual o dia do aniversario dele?",
        correctAnswer: "3",
        answers: [
          { index: "0", text: "28 de outubro" },
          { index: "1", text: "24 de julho" },
          {
            index: "2",
            text: "27 de outubro",
          },
          { index: "3", text: "11 de agosto" },
        ],
      },
      {
        title: "Ele trabalha com o que?",
        correctAnswer: "2",
        answers: [
          { index: "0", text: "Java" },
          { index: "1", text: "Python" },
          {
            index: "2",
            text: "Javascript",
          },
          { index: "3", text: "COBOL" },
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
        correctAnswer: "10",
        answers: [
          {
            index: "0",
            text: "Tonico e Tinoco",
          },
          { index: "1", text: "Tom e Jerry" },
          { index: "2", text: "Tico e Teco" },
          { index: "3", text: "Fred e Barney" },
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
        correctAnswer: "0",
        answers: [
          {
            index: "0",
            text: "Tonico e Tinoco",
          },
          { index: "1", text: "Tom e Jerry" },
          { index: "2", text: "Tico e Teco" },
          { index: "3", text: "Fred e Barney" },
        ],
      },
    ],
  },
];
