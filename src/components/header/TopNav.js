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

export default TopNav;
