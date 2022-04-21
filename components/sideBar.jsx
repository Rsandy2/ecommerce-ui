import React, { Component } from "react";
import FilterItems from "./filterItems";

const sidebarStyle = {
  width: "280px;",
};

function SideBar() {
  return (
    <nav
      id="navbar-example3"
      className="navbar navbar-light bg-light flex-column align-items-stretch p-3"
    >
      <FilterItems />
    </nav>
  );
}

export default SideBar;
