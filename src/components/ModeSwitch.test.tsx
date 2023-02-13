import { render, screen } from "@testing-library/react";
import { ModeProvider } from "../context/ModeContext";

import ModeSwitch from "./ModeSwitch";

describe("test modeswitch", () => {
  test("render mode switch", () => {
    render(
      <ModeProvider>
        <ModeSwitch />
      </ModeProvider>
    );
    expect(screen.getByText(/light mode/i)).toBeInTheDocument();
  });
});
