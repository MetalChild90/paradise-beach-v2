import PropTypes from "prop-types";

function SliderContent({ activeIndex, dataImages }) {
  return (
    <section>
      {dataImages.map((slide, index) => (
        <div
          key={index}
          className={`image-box ${
            index === activeIndex ? "active" : "inactive"
          }`}
        >
          <img className="slide-image" src={slide.url} alt={slide.title} />
        </div>
      ))}
    </section>
  );
}

SliderContent.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  dataImages: PropTypes.array.isRequired,
};

export default SliderContent;
