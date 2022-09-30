import React, { useState, useEffect } from "react";
import "./scss/main.scss";
import Header from "./sections/Header";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import Socials from "./sections/Socials";
import Footer from "./sections/Footer";

function App() {
  const [firstSectionOffsetTop, setFirstSectionOffsetTop] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position >= firstSectionOffsetTop / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstSectionOffsetTop]);

  return (
    <div className="App">
      <Header fsOffsetTop={firstSectionOffsetTop} isScrolled={isScrolled} />
      <main>
        <FirstSection
          handleOffset={(value) => setFirstSectionOffsetTop(value)}
          isScrolled={isScrolled}
        />
        <SecondSection />
        <ThirdSection />
      </main>
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
