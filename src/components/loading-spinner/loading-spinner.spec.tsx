import { render, screen } from "@testing-library/react";
import LoadingSpinner from ".";

describe("Loading spinner", () => {
  beforeEach(() => {
    render(<LoadingSpinner />);
  });

  it("should render", async () => {
    const loadingElm = await screen.findByTestId("loading-spinner");
    expect(loadingElm).toBeInTheDocument();
  });
});
