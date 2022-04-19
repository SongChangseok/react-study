import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting the checkbox should its value", () => {
  // const { getByLabelText } = render(<Checkbox />);
  // const checkbox = getByLabelText(/not checked/i);
  // fireEvent.click(checkbox);
  // expect(checkbox.checked).toEqual(true);
  // fireEvent.click(checkbox);
  // expect(checkbox.checked).toEqual(false);
  const { getByTestId } = render(<Checkbox />);
  const checkbox = getByTestId("checkbox");
  fireEvent.click(checkbox);
  expect(checkbox).toEqual(true);
});
