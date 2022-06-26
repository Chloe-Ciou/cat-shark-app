import PropTypes from 'prop-types';

const CarouselItem = ({ slide, isActive, index }) => {
  return (
    <div data-testid={`slide_${index}`} className={`slide fade ${isActive ? 'active' : ''}`}>
      <img src={slide.src} alt={slide.alt} className="image" />
    </div>
  )
}

CarouselItem.propTypes = {
  index: PropTypes.number,
  isActive: PropTypes.bool,
  slide: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  })
};

export default CarouselItem;