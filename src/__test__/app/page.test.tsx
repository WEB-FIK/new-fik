import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../app/page";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByText("Get started by Editing")).toBeInTheDocument();
  });
});
