import { render, screen } from "@testing-library/react";
import { ModeProvider } from "../context/ModeContext";
import Header from "./Header";

describe("test header", () => {
  test("render header", () => {
    render(
      <ModeProvider>
        <Header />
      </ModeProvider>
    );
    expect(screen.getByText(/where in the world/i)).toBeInTheDocument();
  });
});
