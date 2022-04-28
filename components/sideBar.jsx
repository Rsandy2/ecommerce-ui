import React, { Component } from "react";
import FilterItems from "./filterItems";

const sidebarStyle = {
  width: "280px;",
};

function SideBar() {
  return (
    <nav
      id="navbar-example3"
      className="shadow-md navbar navbar-light flex-column align-items-stretch p-3"
      style={{
        borderRadius: ".5rem",
        background: "#FFFFFF",
        marginTop: "1rem",
      }}
    >
      <FilterItems />
    </nav>
  );
}

export default SideBar;
