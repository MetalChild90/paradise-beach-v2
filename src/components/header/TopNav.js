import PropTypes from "prop-types";

import MenuIcon from "./MenuIcon";

function TopNav({ isScrolled }) {
  return (
    <div className={`TopNav ${isScrolled && "scrolled"}`}>
      <MenuIcon isScrolled={isScrolled} />
      <h1 className={`title ${isScrolled && "scrolled"}`}>Paradise Beach</h1>
      <a className="book-btn" href="!#">
        book now
      </a>
    </div>
  );
}

TopNav.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default TopNav;
