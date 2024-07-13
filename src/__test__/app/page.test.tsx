import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../app/page";

describe("Hompage being rendered smoothly", () => {
  it("renders without crashing and has six sections", () => {
    render(<Home />);
    const sections = screen.getAllByRole("region");
    expect(sections).toHaveLength(6);
  });
});

describe("Hero section being rendered smoothly", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("Make sure the first section (hero section) is consists of five images", () => {
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(5);
  });

  it("Make sure the first section has five dots as mark of which image is being displayed", () => {
    const dots = screen.getAllByTestId("dot");
    expect(dots).toHaveLength(5);
  });

  it("Make sure the first section can changed the images automatically", async () => {
    jest.useFakeTimers();
    render(<Home />);

    const imagesBefore = screen.getAllByRole("img");
    const firstImageBefore = (imagesBefore[0] as HTMLImageElement).src;

    jest.advanceTimersByTime(5000);

    await new Promise((resolve) => setImmediate(resolve));

    const imagesAfter = screen.getAllByRole("img");
    const firstImageAfter = (imagesAfter[0] as HTMLImageElement).src;

    expect(firstImageBefore).not.toBe(firstImageAfter);
  });

  it("Make sure the dot corresponding to the currently displayed image is highlighted", () => {
    const dots = screen.getAllByTestId("dot");
    const images = screen.getAllByRole("img");

    const firstDot = dots[0];
    const firstImage = images[0];

    expect(firstDot).toHaveClass("active");
    expect(firstImage).toBeVisible();
  });

  it("Make sure clicking on each dot correctly navigates to and displays the respective image", () => {
    const dots = screen.getAllByTestId("dot");
    const images = screen.getAllByRole("img");

    const secondDot = dots[1];
    const secondImage = images[1];

    secondDot.click();

    expect(secondDot).toHaveClass("active");
    expect(secondImage).toBeVisible();
  });
});
