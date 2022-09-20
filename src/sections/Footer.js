import logo from "../assets/cloud9.png";
import FooterList from "../components/FooterList";

function Footer() {
  const menuList1 = {
    title: "paradise beach",
    features: [
      "Welcome",
      "Reservations",
      "Accommodation",
      "Things To Do",
      "Location",
      "Rates",
      "Contact Us",
      "Galler",
      "Feedback",
    ],
  };

  const menuList2 = {
    title: "Cloud 9 Holidays",
    features: [
      "Offers",
      "Gallery",
      "About Us",
      "Careers",
      "Contact Us",
      "Cookie Policy",
      "Privacy Policy",
    ],
  };
  return (
    <div className="Footer">
      <div className="links">
        <div className="column">
          <img className="logo-footer" src={logo} alt="hotels logo" />
          <span>enquiries@cloud9holidays.com</span>
          <ul className="list">
            <li>
              <a href="!#">
                Contact us<i className="fa-solid fa-chevron-right"></i>
              </a>
            </li>
            <li>
              <a href="!#">
                Make a reservation<i className="fa-solid fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </div>
        <FooterList menuList={menuList1} />
        <FooterList menuList={menuList2} />
      </div>
      <div className="bottom">
        <p>{new Date().getFullYear()} &copy; Cloud 9 Holidays</p>
      </div>
    </div>
  );
}

export default Footer;
