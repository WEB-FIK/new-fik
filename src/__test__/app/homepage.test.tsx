import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../app/page";
import CarouselHomepage from "@/components/Homepage/Carousel/CarouselHomepage";

describe("Home", () => {
  it("renders without crashing, and has six sections", () => {
    render(<Home />);
    const sections = screen.getAllByRole("region");
    expect(sections).toHaveLength(6);
  });
});

describe("Hero Section", () => {

  it("renders 5 images", () => {
    render(<CarouselHomepage />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(5);
  });

  it("has five dots as markers of which image is being displayed", () => {
    render(<CarouselHomepage />);
    const dots = screen.getAllByTestId("dot");
    expect(dots).toHaveLength(5);
  });

  it("changes the images automatically", async () => {
    jest.useFakeTimers();
    render(<CarouselHomepage />);

    const imagesBefore = screen.getAllByRole("img");
    const firstImageBefore = (imagesBefore[0] as HTMLImageElement).src;

    jest.advanceTimersByTime(5000);

    await new Promise((resolve) => setImmediate(resolve));

    const imagesAfter = screen.getAllByRole("img");
    const firstImageAfter = (imagesAfter[0] as HTMLImageElement).src;

    expect(firstImageBefore).not.toBe(firstImageAfter);
  });

  it("highlights the dot corresponding to the currently displayed image", () => {
    render(<CarouselHomepage />);
    const dots = screen.getAllByTestId("dot");
    const activeDot = dots.find(dot => dot.classList.contains("swiper-pagination-bullet-active"));
    expect(activeDot).toBeInTheDocument();
  });

  it("clicking on each dot correctly navigates to and displays the respective image", () => {
    render(<CarouselHomepage />);
    const dots = screen.getAllByTestId("dot");
    const images = screen.getAllByRole("img");

    dots.forEach((dot, index) => {
      fireEvent.click(dot);
      const activeImage = images[index];
      expect(activeImage).toBeVisible();
    });
  });
});
