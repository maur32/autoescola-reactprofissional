import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";

test("renders ProductDetail page", () => {
  render(<ProductDetail />);
  expect(screen.getByText("Nome do serviço")).toBeInTheDocument();
});
