import React from "react";
import styles from "../styles/NavBar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    return(
        <div className={styles.navBar}>
            <h1 className={styles.NavBar_name}>E-commerce UI</h1>
            <div className={styles.search}>
                <input className={styles.search__bar} type="text" placeholder="Search..."/>
                <input className={styles.search__btn} type="submit"/>
            </div>
            <FontAwesomeIcon icon={["fas fa-sign-in-alt"]}></FontAwesomeIcon>
            <h2>shopping cart</h2>
        </div>
    );
}
export default NavBar;