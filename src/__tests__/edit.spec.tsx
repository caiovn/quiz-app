// import { QUIZ_LIST_MOCK } from "@/api/quiz/infra/quiz.mock";
// import { QuizApi } from "@/api/quiz/quiz.api";
// import Edit from "@/pages/quiz/edit/[id]";
// import { render, screen, waitFor } from "@testing-library/react";
// import { useRouter } from "next/router";

// jest.mock("next/router", () => ({
//   useRouter: jest.fn(),
// }));

// const pushMock = jest.fn();

// describe("Edit", () => {
//   beforeEach(() => {
//     (useRouter as jest.Mock).mockReturnValue({
//       query: {
//         id: "dcd00bea-be1f-4ea8-abbe-5364641b1aa0",
//         mock: pushMock,
//       },
//     });
//     render(<Edit />);
//   });

//   it("should render", async () => {
//     const getQuizSpy = jest
//       .spyOn(QuizApi, "get")
//       .mockResolvedValue(QUIZ_LIST_MOCK[0]);

//     await waitFor(() => {
//       expect(screen.getByTestId("quiz-form-title").innerText).toEqual(
//         "Editar quiz"
//       );
//     });
//     expect(getQuizSpy).toHaveBeenCalled();
//   });
// });
