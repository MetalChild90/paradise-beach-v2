import PropTypes from "prop-types";
import logo from "../../assets/cloud9.png";

const menuList = [
  "The Island",
  "Accommodation",
  "Things To Do",
  "Location",
  "ates",
  "Offers",
  "Contact Us",
];

function SideNav({ showSideNav, closeSidenav }) {
  return (
    <div className={`SideNav ${showSideNav && "active"}`}>
      <div className="logo-container">
        <img className="logo" src={logo} alt="island logo" />
      </div>
      <div className="reservation-input">
        <p>Make a Reservation</p>
        <i className="fa-solid fa-calendar-days"></i>
      </div>
      <div className="links">
        <p>
          <strong className="news">Latest News</strong>
        </p>
        <p>
          <strong className="gallery">Gallery</strong>
        </p>
        <div className="list-container">
          <ul className="list">
            {menuList.map((item, i) => (
              <li key={i}>
                <a href="!#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showSideNav && (
        <span onClick={closeSidenav} className="close-side-menu">
          &times;
        </span>
      )}
    </div>
  );
}

SideNav.propTypes = {
  showSideNav: PropTypes.bool.isRequired,
  closeSidenav: PropTypes.func.isRequired,
};

export default SideNav;
