import { useState, useEffect } from "react";

import CarouselItem from "./CarouselItem";
import { useImages } from "../../hooks/useImages";
import { IMAGE_CATEGORIES } from "../../constants";

const Carousel = () => {
  const { getImages, images } = useImages();
  // In order to handle more image types in the future, thus array type is chosen here.
  const [imgTypes, setImgTypes] = useState([IMAGE_CATEGORIES.CAT.type]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slidesLength = images?.length || 0;

  useEffect(() => {
    if (imgTypes.length) {
      getImages(imgTypes, () => setCurrentSlideIndex(0));
    }
  }, [imgTypes, getImages, setCurrentSlideIndex]);

  const checkIsButtonActive = (type) => imgTypes.find((imgType) => type === imgType);
  const renderPrevSlide = () => setCurrentSlideIndex(currentSlideIndex ? currentSlideIndex - 1 : slidesLength - 1);
  const renderNextSlide = () => setCurrentSlideIndex(currentSlideIndex === slidesLength - 1 ? 0 : currentSlideIndex + 1);

  /**
   * Sets image type list.
   * @param {String} imageType 'cat' | 'shark'
   */
  const setImageTypes = (imageType) => {
    const index = imgTypes.findIndex((type) => type === imageType);
    if (index === -1) {
      setImgTypes([...imgTypes, imageType]);
    } else if (index !== -1 && imgTypes.length > 1) {
      imgTypes.splice(index, 1);
      setImgTypes([...imgTypes]);
    }
  };

  const renderButtonGroup = () => {
    return Object.values(IMAGE_CATEGORIES).map((category) =>
      <button data-testid={`category_btn_${category.type}`} key={category.type} className={`${checkIsButtonActive(category.type) ? "active" : ""}`} onClick={() => setImageTypes(category.type)}>{category.name}</button>);
  };

  return (
    <section className="carousel" data-testid="carousel">
      <div className="slides">
        <div className="button-group">{renderButtonGroup()}</div>
        {slidesLength
          ? images.map((slide, index) => <CarouselItem key={`${slide.alt}_${index}`} index={index} slide={slide} isActive={currentSlideIndex === index} />)
          : <div className="no-content">No photos</div>
        }
        <span className="prev">
          <button data-testid="prev_btn" aria-label="previous slide" onClick={renderPrevSlide}>&#10094;</button>
        </span>
        <span className="next">
          <button data-testid="next_btn" aria-label="next slide" onClick={renderNextSlide}>&#10095;</button>
        </span>
      </div>
    </section >
  );
};

export default Carousel;
