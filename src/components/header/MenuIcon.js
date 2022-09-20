import React, { useState } from "react";
import SideNav from "./SideNav";

function MenuIcon({ isScrolled }) {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <>
      <div
        className={`MenuIcon ${isScrolled && "scrolled"}`}
        onClick={() => setShowSideNav(!showSideNav)}
      >
        <i className="fa-solid fa-bars"></i>
        <p className="menu-text">Menu</p>
      </div>
      <SideNav
        closeSidenav={() => setShowSideNav(!showSideNav)}
        showSideNav={showSideNav}
      />
    </>
  );
}

export default MenuIcon;
