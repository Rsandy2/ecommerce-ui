import React from "react";
import styles from "../styles/NavBar.module.scss";


const NavBar = () => {
    return(
        <div className={styles.navBar}>
            <h1 className={styles.NavBar_name}>E-commerce UI</h1>
            <div className={styles.search}>
                <input className={styles.search__bar} type="text" placeholder="Search..."/>
                <input className={styles.search__btn} type="submit"/>
            </div>
            <h2>shopping cart</h2>
        </div>
    );
}
export default NavBar;