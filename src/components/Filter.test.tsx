import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

describe("test header", () => {
  test("render header", () => {
    render(<Filter />);
    expect(
      screen.getByText(/North American Free Trade Agreement/i)
    ).toBeInTheDocument();
  });
});
