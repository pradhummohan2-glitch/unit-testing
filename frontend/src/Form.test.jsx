import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

test("input updates correctly", () => {
  render(<Form />);

  const input = screen.getByPlaceholderText("Enter name");

  fireEvent.change(input, { target: { value: "Pradhum" } });

  expect(screen.getByText("Pradhum")).toBeInTheDocument();
});