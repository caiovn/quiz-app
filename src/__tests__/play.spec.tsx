import { QUIZ_LIST_MOCK } from "@/api/quiz/infra/quiz.mock";
import PlayQuiz from "@/pages/quiz/play/[id]";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const pushMock = jest.fn();

const mock = QUIZ_LIST_MOCK[0];

describe("PlayQuiz", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {
        id: mock.id,
      },
      push: pushMock,
    });
    render(<PlayQuiz />);
  });

  it("should render", async () => {
    await new Promise((r) => setTimeout(r, 2000));
    expect(screen.getByText(mock.name)).toBeInTheDocument();
  });
});
