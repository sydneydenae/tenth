import React from "react"
import Button from "./button"
import { render, screen } from "@testing-library/react"

  describe("Button", () => {
     test('Button is of type button', () => {
        render(<Button />);
        screen.debug();
        expect(screen.getByRole(`button`)).toBeInTheDocument();
    });
    test('Button has correct placeholder', () => {
      render(<Button />);
      screen.debug();
      expect(screen.getByPlaceholderText(`Click Me!`)).toBeInTheDocument();
    });
    test("Button has correct color", () => {
      const { getByTestId } = render(<Button />)
      expect(getByTestId("default-button")).toHaveClass(`bg-mmb-500`)
    });
  })
