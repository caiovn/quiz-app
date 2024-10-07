import { QUIZ_LIST_MOCK } from "@/api/quiz/infra/quiz.mock";
import Edit from "@/pages/quiz/edit/[id]";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const pushMock = jest.fn();

const mock = QUIZ_LIST_MOCK[0];

describe("Edit", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {
        id: mock.id,
      },
      push: pushMock,
    });
    render(<Edit />);
  });

  it("should render", async () => {
    await new Promise((r) => setTimeout(r, 3000));
    const { getByText } = within(screen.getByTestId("quiz-form-title"));

    expect(getByText("Editar quiz")).toBeInTheDocument();
    expect(screen.getByDisplayValue(mock.name)).toHaveAttribute(
      "data-testid",
      "quiz-form-name-input"
    );
    expect(screen.getByDisplayValue(mock.description)).toHaveAttribute(
      "data-testid",
      "quiz-form-description-input"
    );
  });

  it("when edit should update quiz on submit", async () => {
    await new Promise((r) => setTimeout(r, 3000));

    await userEvent.type(
      screen.getByTestId("quiz-form-name-input"),
      " updated[tab]"
    );

    expect(screen.getByTestId("submit-quiz-form-btn")).toBeEnabled();
    await userEvent.click(screen.getByTestId("submit-quiz-form-btn"));
    expect(pushMock).toHaveBeenCalledWith("/quiz");
  });
});

describe("Edit error", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {
        id: "mock-error-id",
      },
      push: pushMock,
    });
    render(<Edit />);
  });

  it("should push to /quiz when promise rejects", async () => {
    await new Promise((r) => setTimeout(r, 3000));

    expect(pushMock).toHaveBeenCalledWith("/quiz");
  });
});
