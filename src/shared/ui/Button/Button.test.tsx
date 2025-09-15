import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button", () => {
  test("Display", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("With theme 'OUTLINE'", () => {
    render(<Button theme={ThemeButton.OUTLINE}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("outline");
  });
});
