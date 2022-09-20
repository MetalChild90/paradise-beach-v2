import images from "../assets/smallSliderImages/dataImages";
import MiniSliderSection from "../components/slider/MiniSliderSection";

const apartments = [
  {
    name: "Apartament 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit, voluptate quam repellendus quae animi, deserunt sit rem
dicta ad, architecto commodi.`,
    features: [
      "Feature one",
      "Very very very long feature number two",
      "Feature three",
    ],
    reverse: false,
  },
  {
    name: "Apartament 2",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit, voluptate quam repellendus quae animi, deserunt sit rem
dicta ad, architecto commodi. Voluptate quam repellendus quae animi, deserunt sit rem
dicta ad, architecto commodi`,
    features: ["Awsome pool", "Fifty terraces", "360 degree view"],
    reverse: true,
  },
];

function SecondSection() {
  const data1 = images.slice(0, 3);
  const data2 = images.slice(3);

  return (
    <div className="SecondSection">
      <div className="innerWraper">
        <h2>accomodation</h2>
        <MiniSliderSection images={data1} apartment={apartments[0]} />
        <MiniSliderSection images={data2} apartment={apartments[1]} />
        <p className="cta-btn-wrapper">
          <button className="cta-btn">enquire now</button>
        </p>
      </div>
    </div>
  );
}

export default SecondSection;
