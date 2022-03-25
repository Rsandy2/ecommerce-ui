import React, { Component } from "react";

const sidebarStyle = {
  width: "280px;",
};

function SideBar() {
  return (
    <div className="flex-shrink-0 p-3 bg-light" style={sidebarStyle}>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
            >
              Genre
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
