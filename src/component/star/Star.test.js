import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";

// test("renders a start", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Star />, div);
//   expect(div.querySelector("svg")).toBeTruthy();
// });

// test("renders a start", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Star />, div);
//   //   expect(div.querySelector("svg")).toHaveAttribute("id", "star");
//   expect(div.querySelector("svg")).toHaveClass("test");
// });

test("renders an h1", () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/Star/);
  expect(h1).toHaveTextContent("Star");
});
