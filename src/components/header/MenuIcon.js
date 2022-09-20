import PropTypes from "prop-types";
import SideNav from "./SideNav";
import useToggle from "../../hooks/useToggle";

function MenuIcon({ isScrolled }) {
  const [showSideNav, toggleShowSideNav] = useToggle(false);

  return (
    <>
      <div
        className={`MenuIcon ${isScrolled && "scrolled"}`}
        onClick={() => toggleShowSideNav()}
      >
        <i className="fa-solid fa-bars"></i>
        <p className="menu-text">Menu</p>
      </div>
      <SideNav
        closeSidenav={() => toggleShowSideNav()}
        showSideNav={showSideNav}
      />
    </>
  );
}

MenuIcon.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default MenuIcon;
