import React, { Component, useState, useContext } from "react";
import { BsPersonCircle, BsSearch, BsCart3 } from "react-icons/bs";
import ShoppingCart from "./ShoppingCart";
import { push as Menu } from "react-burger-menu";
import { CgMenu } from "react-icons/cg";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// make a new context
const MyContext = React.createContext();

// create the provider
const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

const MenuButton = () => {
  const ctx = useContext(MyContext);
  return (
    <CgMenu
      size="2.4rem"
      className="hover:cursor-pointer hover:text-slate-600 mt-1"
      onClick={() => ctx.toggleMenu()}
    />
  );
};

const MenuSideBar = () => {
  const ctx = useContext(MyContext);
  const router = useRouter();
  return (
    <Menu
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
      burgerBarClassName="bg-coffee"
      itemClassName="text-white no-underline outline-none text-xl py-2 hover:text-slate-300"
      crossButtonClassName="scale-125"
      crossClassName="bg-white"
      menuClassName="bg-darkGreen pt-10 px-6 text-xl"
      morphShapeClassName="fill-current"
      itemListClassName="bg-darkGreen p-3.5"
      overlayClassName="bg-opacity-50"
    >
      <a id="" className="menu-item" href="/home">
        Home
      </a>
      <a id="" className="menu-item" href="/bookView">
        Book View
      </a>
      <a id="" className="menu-item" href="/search">
        Search View
      </a>
      <a id="" className="menu-item" href="/cartPage">
        Cart View
      </a>
      <a className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

const header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session } = useSession();

  return (
    <MyProvider>
      <MenuSideBar
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <div className="flex flex-row items-center justify-center h-16 mx-3 z-10">
        <MenuButton />
        <a
          className="text-coffee text-3xl mx-2 no-underline font-semibold"
          href="/"
        >
          Bookstore
        </a>
        {/* search bar */}
        <div className="flex-grow mx-2">
          <div className="wrapper">
            <div className=" bg-white rounded flex items-center w-full p-2 shadow-sm border border-gray-200">
              <input
                type="search"
                placeholder="search..."
                x-model="q"
                className="w-full px-4 text-sm outline-none focus:outline-none bg-transparent"
              ></input>
              <button className="flex items-center justify-center pl-3 pr-2 border-l border-slate-300">
                <BsSearch size="1rem" color="gray" />
              </button>
            </div>
          </div>
        </div>

        {/* icon row */}
        <div className="flex flex-row items-center mx-2">
          <button className="text-coffee flex flex-row items-center mr-2">
            <BsPersonCircle size="2rem" className="pr-2" />
            {session ? (
              <div>
                {" "}
                <Link href="/profile2">{session.user.username}</Link>
              </div>
            ) : (
              <Link href="/login">Sign In</Link>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-coffee flex flex-row items-center mr-2"
          >
            <BsCart3 size="2rem" className="pr-2" />
            Cart
          </button>
          <ShoppingCart isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </MyProvider>
  );
};
export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
export default header;
