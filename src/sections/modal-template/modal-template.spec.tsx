/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ModalTemplate from ".";

// Mocking createPortal for testing purposes
jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: (node: React.ReactNode) => node,
}));

// Mocking focus-trap-react for testing purposes
jest.mock("focus-trap-react", () => (props: any) => (
  <div>{props.children}</div>
));

describe("ModalTemplate", () => {
  const onCloseMock = jest.fn();

  beforeEach(() => {
    render(
      <ModalTemplate
        title="Test Modal"
        subTitle="This is a subtitle"
        confirmButtonText="Confirm"
        cancelButtonText="Cancel"
        onClose={onCloseMock}
      />
    );
  });

  it("should render the modal with title and subtitle", () => {
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("This is a subtitle")).toBeInTheDocument();
  });

  it("should call onClose with DISMISS when close button is clicked", () => {
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledWith("DISMISS");
  });

  it("should call onClose with CONFIRM when confirm button is clicked", () => {
    const confirmButton = screen.getByRole("button", { name: /confirm/i });
    fireEvent.click(confirmButton);
    expect(onCloseMock).toHaveBeenCalledWith("CONFIRM");
  });

  it("should call onClose with CANCEL when cancel button is clicked", () => {
    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(onCloseMock).toHaveBeenCalledWith("CANCEL");
  });

  it("should close the modal when Escape key is pressed", () => {
    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });
    expect(onCloseMock).toHaveBeenCalledWith("DISMISS");
  });
});
