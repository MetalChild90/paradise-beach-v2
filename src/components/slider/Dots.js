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

export default Dots;
