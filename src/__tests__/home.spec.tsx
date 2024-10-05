import Home from "@/pages";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const pushMock = jest.fn();

describe("Home", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
    render(<Home />);
  });

  it("load and display greetings", async () => {
    await userEvent.click(screen.getByTestId("home-navigate-quiz-btn"));

    expect(pushMock).toHaveBeenCalledWith("/quiz");
  });
});
