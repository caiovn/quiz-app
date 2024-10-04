import Create from "@/pages/quiz/create";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("CreateQuizForm", () => {
  beforeEach(() => {
    render(<Create />);
  });

  it("should validate creation form", async () => {
    await userEvent.type(
      screen.getByTestId("quiz-form-name-input"),
      "Quiz test"
    );
    await userEvent.type(
      screen.getByTestId("quiz-form-description-input"),
      "Quiz test"
    );

    expect(screen.getByTestId("submit-quiz-form-btn")).toBeDisabled();
  });
});
