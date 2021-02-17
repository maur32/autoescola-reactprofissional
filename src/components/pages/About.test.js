import React from "react";
import { render, screen } from "test-utils";

import About from "./About";

beforeEach(() => {
  jest.resetAllMocks();
});

test("render About page", () => {
  render(<About />);
  expect(screen.getByText("Conheça nossos professores")).toBeInTheDocument();
});

test("scrolls to top in first render", () => {
  render(<About />);
  expect(window.scrollTo).toBeCalledTimes(1);
});
