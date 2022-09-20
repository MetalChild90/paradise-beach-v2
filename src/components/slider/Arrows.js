import PropTypes from "prop-types";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="arrow prev" onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </span>
      <span className="arrow next" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </span>
    </div>
  );
}

Arrows.propTypes = {
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};

export default Arrows;
