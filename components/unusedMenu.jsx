import React, { Component } from "react";
import {push as Menu} from "react-burger-menu";
import { CgMenu } from "react-icons/cg";

class MenuSideBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    return (
      <div>
        <Menu 
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          customBurgerIcon={false}

          burgerBarClassName="bg-coffee" 
          itemClassName="text-white no-underline text-xl py-2"
          // burgerButtonClassName="fixed w-9 h-8 left-9 top-6"
          crossButtonClassName="scale-125"
          crossClassName="bg-white"
          menuClassName="bg-darkGreen pt-10 px-6 text-xl"
          morphShapeClassName="fill-current"
          itemListClassName="bg-darkGreen p-3.5"
          overlayClassName="bg-opacity-50"
        >
            <a onClick={() => this.closeMenu()} id="home" className="menu-item" href="/">Home</a>
            <a onClick={() => this.closeMenu()} id="" className="menu-item" href="/bookView">Book View</a>
            <a onClick={() => this.closeMenu()} id="" className="menu-item" href="/search">Search View</a>
            <a onClick={() => this.closeMenu()} id="" className="menu-item" href="/cartPage">Cart View</a>
            <a onClick={() => this.closeMenu()} className="menu-item--small" href="">Settings</a>
        </Menu>
        <CgMenu size="2.4rem" onClick={() => this.toggleMenu()}/>
      </div>
    );
  }
}
export default MenuSideBar;