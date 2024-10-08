import QuizList from "@/pages/quiz";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const pushMock = jest.fn();

describe("QuizList", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
    render(<QuizList />);
  });

  it("should list quiz cards", async () => {
    await new Promise((r) => setTimeout(r, 2000));
    const list = screen.getByTestId("quiz-list-cards");

    expect(list.childNodes.length).toEqual(1);
  });

  it("should push to play route when click", async () => {
    await new Promise((r) => setTimeout(r, 2000));
    await userEvent.click(screen.getByRole("button", { name: /Jogar/i }));

    expect(pushMock).toHaveBeenCalled();
  });
});
