import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";

function Slider({ dataImages, bigSlider }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const len = dataImages.length - 1;

  useEffect(() => {
    if (bigSlider) {
      const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeIndex, bigSlider, len]);

  return (
    <div
      className={`Slider ${
        bigSlider ? "slider-container" : "slider-container-small"
      }`}
    >
      <SliderContent activeIndex={activeIndex} dataImages={dataImages} />
      {bigSlider && (
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
      )}
      {!bigSlider && (
        <Dots
          activeIndex={activeIndex}
          dataImages={dataImages}
          handleClick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      )}
    </div>
  );
}

export default Slider;
