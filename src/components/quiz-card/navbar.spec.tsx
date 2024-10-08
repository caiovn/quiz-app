import { render, screen } from "@testing-library/react";
import QuizCard, { QuizCardProps } from ".";
import { QUIZ_LIST_MOCK } from "@/api/quiz/infra/quiz.mock";
import userEvent from "@testing-library/user-event";

describe("QuizCard", () => {
  const quiz = QUIZ_LIST_MOCK[0];
  const btnClick = jest.fn();
  const props: QuizCardProps = {
    quiz,
    buttons: [
      {
        label: "test",
        onClick: btnClick,
        variant: "primary",
      },
    ],
  };

  beforeEach(() => {
    render(<QuizCard buttons={props.buttons} quiz={props.quiz} />);
  });

  it("should call function when button click", async () => {
    await userEvent.click(await screen.findByRole("button"));
    expect(btnClick).toHaveBeenCalled();
  });

  it("title should be rendered", async () => {
    expect(await screen.findByText(quiz.name)).toBeInTheDocument();
  });

  it("description should be rendered", async () => {
    expect(await screen.findByText(quiz.description)).toBeInTheDocument();
  });
});
