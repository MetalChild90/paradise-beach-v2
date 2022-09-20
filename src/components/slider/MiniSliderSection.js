import Slider from "./Slider";

function MiniSliderSection({
  images,
  apartment: { name, description, features, reverse },
}) {
  return (
    <div
      className="miniSliderSection"
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <Slider bigSlider={false} dataImages={images} />
      <div className="infoBox">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MiniSliderSection;
