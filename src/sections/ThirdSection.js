import Slider from "../components/slider/Slider";
import dataImages from "../assets/bigSliderImages/dataImages";

function ThirdSection() {
  return (
    <div className="ThirdSection">
      <Slider dataImages={dataImages} bigSlider={true} />
    </div>
  );
}

export default ThirdSection;
