import { render, screen } from "@testing-library/react";

import { SearchProvider } from "../context/SearchContext";

import SearchInput from "./SearchInput";

describe("test search input", () => {
  test("render searchinput", () => {
    render(
      <SearchProvider>
        <SearchInput id="test" placeholder="placeholder" />
      </SearchProvider>
    );
    expect(screen.getByPlaceholderText("placeholder")).toBeInTheDocument();
  });
});
