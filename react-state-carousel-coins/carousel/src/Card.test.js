import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders Carousel info", () => {
  render(<Card />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
it("matches snapshot", () => {
  const { asFragment } = render(<Card caption="gang" />);
  expect(asFragment()).toMatchSnapshot();
});
