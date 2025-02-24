import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./header";

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header />);

    const header = screen.getByText("Home");
    expect(header).toBeInTheDocument();
  });

  it("contains navigation elements", () => {
    render(<Header />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
