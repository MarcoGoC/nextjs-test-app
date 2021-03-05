import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Formula 1 Stats" })
    ).toBeInTheDocument();
  });
});
