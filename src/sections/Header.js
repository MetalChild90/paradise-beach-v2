import BgVideo from "../components/header/BgVideo";
import TopNav from "../components/header/TopNav";
import $ from "jquery";

function Header({ fsOffset, isScrolled }) {
  function transition() {
    console.log("work");
    $("html, body").animate(
      {
        scrollTop: fsOffset,
      },
      1000
    );
  }

  return (
    <div className="Header">
      <TopNav isScrolled={isScrolled} />
      <BgVideo />
      <span className="go-down" onClick={transition}>
        <i className="fa-solid fa-chevron-down"></i>
      </span>
    </div>
  );
}

export default Header;
