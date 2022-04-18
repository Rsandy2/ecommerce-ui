import React, { Component } from "react";
import {push as Menu} from "react-burger-menu";

class MenuSideBar extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu 
        burgerBarClassName="bg-coffee" 
        itemClassName="text-white no-underline text-xl py-2"
        burgerButtonClassName="fixed w-9 h-8 left-9 top-6"
        crossButtonClassName="scale-125"
        crossClassName="bg-white"
        menuClassName="bg-darkGreen pt-10 px-6 text-xl"
        morphShapeClassName="fill-current"
        itemListClassName="bg-darkGreen p-3.5"
        overlayClassName="bg-opacity-30"
        pageWrapId={'page-wrap'} 
        outerContainerId={'outer-container'}
      >
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="" className="menu-item" href="/bookView">Book View</a>
          <a id="" className="menu-item" href="/search">Search View</a>
          <a id="" className="menu-item" href="/cartPage">Cart View</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
export default MenuSideBar;