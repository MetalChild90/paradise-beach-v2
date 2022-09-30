import PropTypes from "prop-types";
import BgVideo from "../components/header/BgVideo";
import TopNav from "../components/header/TopNav";

function Header({ fsOffsetTop, isScrolled }) {
  
  const scrollDown = () => {
    window.scrollTo({
      top: fsOffsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="Header">
      <TopNav isScrolled={isScrolled} />
      <BgVideo />
      <span className="go-down" onClick={scrollDown}>
        <i className="fa-solid fa-chevron-down"></i>
      </span>
    </div>
  );
}

Header.propTypes = {
  fsOffsetTop: PropTypes.number.isRequired,
  isScrolled: PropTypes.bool.isRequired,
};

export default Header;
