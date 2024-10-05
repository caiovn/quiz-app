import { Quiz } from "@/api/quiz/domain/model/quiz";
import { QuizApi } from "@/api/quiz/quiz.api";
import Create from "@/pages/quiz/create";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const pushMock = jest.fn();

describe("CreateQuizForm", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
    render(<Create />);
  });

  it("when blur name field should render error message", async () => {
    await userEvent.type(screen.getByTestId("quiz-form-name-input"), "[tab]");
    await userEvent.type(
      screen.getByTestId("quiz-form-description-input"),
      "Quiz test"
    );
    expect(
      screen.getByTestId("quiz-form-name-input-error-msg")
    ).toBeInTheDocument();
    expect(screen.getByTestId("submit-quiz-form-btn")).toBeDisabled();
  });

  it("when delete question should render error message", async () => {
    await userEvent.click(screen.getByTestId("question-form-delete-0-btn"));
    expect(
      screen.getByTestId("question-form-error-message")
    ).toBeInTheDocument();
  });

  it("when fill form should submit form", async () => {
    const createQuizSpy = jest
      .spyOn(QuizApi, "create")
      .mockResolvedValue({} as Quiz);
    await userEvent.type(
      screen.getByTestId("quiz-form-name-input"),
      "Quiz test"
    );
    await userEvent.type(
      screen.getByTestId("quiz-form-description-input"),
      "Quiz test"
    );
    await userEvent.type(
      screen.getByTestId("question-form-title-0-input"),
      "Question test"
    );

    await userEvent.type(
      screen.getByTestId("answer-form-input-0-0"),
      "Question test 1"
    );
    await userEvent.type(
      screen.getByTestId("answer-form-input-0-1"),
      "Question test 2"
    );
    await userEvent.type(
      screen.getByTestId("answer-form-input-0-2"),
      "Question test 3"
    );
    await userEvent.type(
      screen.getByTestId("answer-form-input-0-3"),
      "Question test 4[tab]"
    );

    expect(screen.getByTestId("submit-quiz-form-btn")).toBeEnabled();

    await userEvent.click(screen.getByTestId("submit-quiz-form-btn"));
    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/quiz");
    });
    expect(createQuizSpy).toHaveBeenCalled();
  });
});
