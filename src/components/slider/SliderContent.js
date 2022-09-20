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

export default SliderContent;
