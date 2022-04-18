import React from "react";
import { Checkbox } from "./UseReducerTest";
import { render, fireEvent } from "@testing-library/react";

test("Selecting the checkbox should change the value of checked to true", () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/i);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
