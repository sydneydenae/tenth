import React from "react"
import Button from "./button"
import { render, screen } from "@testing-library/react"

  describe("Button", () => {
     test('renders Button component', () => {
        render(<Button />);

        screen.debug();
        expect(screen.getByText(/Click Me!/)).toBeInTheDocument();
        expect(screen.getByRole(`button`)).toBeInTheDocument();
    });
  })