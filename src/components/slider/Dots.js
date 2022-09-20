import PropTypes from "prop-types";

function Dots({ activeIndex, handleClick, dataImages }) {
  return (
    <div className="all-dots">
      {dataImages.map((slide, index) => (
        <span
          key={index}
          className={`dot ${activeIndex === index && "active"}`}
          onClick={() => handleClick(index)}
        ></span>
      ))}
    </div>
  );
}

Dots.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  dataImages: PropTypes.array.isRequired,
};

export default Dots;
