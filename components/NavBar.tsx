import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import styles from "../styles/NavBar.module.scss";
import {
  MdLogin,
  MdShoppingCart,
  MdAccountCircle,
  MdSearch,
} from "react-icons/md";

const navIconStyle = {
  paddingLeft: ".3rem",
  paddingRight: ".3rem",
  color: "white",
  textDecoration: "none",
};

const navSearchStyle = {
  width: "350px",
  borderRadius: "0rem .25rem .25rem 0rem",
};

const NavBar = () => {
  return (
    // <div className={styles.navBar}>
    //   <a className={styles.NavBar_name}>E-commerce UI</a>

    //   <div className={styles.search}>
    //     <input
    //       className={styles.search__bar}
    //       type="text"
    //       placeholder="Search..."
    //     />
    //     <button className={styles.search__btn} type="submit">
    //       {" "}
    //       <MdSearch size={20} />{" "}
    //     </button>
    //   </div>

    //   <a className={styles.navBar__icons}>
    //     <MdAccountCircle />
    //     Profile
    //   </a>
    //   <a className={styles.navBar__icons}>
    //     <MdShoppingCart />
    //     Cart
    //   </a>
    //   <a className={styles.navBar__icons}>
    //     <MdLogin /> Login
    //   </a>
    // </div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid" style={{ justifyContent: "start" }}>
        <a className="navbar-brand" style={{ paddingRight: "1rem" }} href=".">
          Ecommerce UI
        </a>
        <form className="d-flex">
          <select
            className="btn btn-light dropdown-toggle"
            style={{
              padding: "0.375rem 0rem",
              borderRadius: ".25rem 0rem 0rem .25rem",
            }}
          >
            <option value="title">Search by Title</option>
            <option value="author">Search by Author</option>
            <option value="isbn">Search by ISBN</option>
          </select>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            style={navSearchStyle}
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="container-fluid" style={{ justifyContent: "end" }}>
        <a className={styles.navBar__icons} style={navIconStyle}>
          <MdAccountCircle />
          Profile
        </a>
        <a className={styles.navBar__icons} style={navIconStyle}>
          <MdShoppingCart />
          Cart
        </a>
        <a className={styles.navBar__icons} style={navIconStyle}>
          <MdLogin /> Login
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
