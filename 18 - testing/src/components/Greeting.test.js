import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("it's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'changed' if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("it's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
