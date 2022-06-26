import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import Carousel from "./index";
import APIProvider from "../../contexts/APIProvider";
import LoadingProvider from "../../contexts/LoadingProvider";

jest.mock("../../hooks/useImages", () => ({
  useImages: () => ({
    getImages: jest.fn(),
    images: [{ src: "src_1", alt: "alt_1" }, { src: "src_2", alt: "alt_2" }, { src: "src_3", alt: "alt_3" }]
  })
}));

describe("<Carousel />", () => {
  it("should match snapshots", () => {
    renderCarousel();
    expect(screen.getByTestId("carousel")).toMatchSnapshot();
  });

  it("should change active slide when prev/next btn was clicked", async () => {
    renderCarousel();
    expect(screen.getByTestId("slide_0")).toHaveClass("active");
    expect(screen.getByTestId("slide_1")).not.toHaveClass("active");
    fireEvent.click(screen.getByTestId("next_btn"));

    await waitFor(() => expect(screen.getByTestId("slide_0")).not.toHaveClass("active"));
    await waitFor(() => expect(screen.getByTestId("slide_1")).toHaveClass("active"));

    fireEvent.click(screen.getByTestId("prev_btn"));
    await waitFor(() => expect(screen.getByTestId("slide_0")).toHaveClass("active"));
    await waitFor(() => expect(screen.getByTestId("slide_1")).not.toHaveClass("active"));
  });

  it("should change button active state when btn was clicked", async () => {
    renderCarousel();
    expect(screen.getByTestId("category_btn_cat")).toHaveClass("active");
    expect(screen.getByTestId("category_btn_shark")).not.toHaveClass("active");

    fireEvent.click(screen.getByTestId("category_btn_shark"));
    await waitFor(() => expect(screen.getByTestId("category_btn_shark")).toHaveClass("active"));

    fireEvent.click(screen.getByTestId("category_btn_cat"));
    await waitFor(() => expect(screen.getByTestId("category_btn_cat")).not.toHaveClass("active"));
    await waitFor(() => expect(screen.getByTestId("category_btn_shark")).toHaveClass("active"));
  });
});

const renderCarousel = () => {
  return render(
    <LoadingProvider>
      <APIProvider>
        <Carousel />
      </APIProvider>
    </LoadingProvider>
  );
};
