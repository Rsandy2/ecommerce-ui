import React from "react";
import styles from "../styles/NavBar.module.scss";
import { MdLogin , MdShoppingCart, MdAccountCircle, MdSearch} from "react-icons/md";


const NavBar = () => {
    return(
        <div className={styles.navBar}>

            <a className={styles.NavBar_name}>E-commerce UI</a>

            <div className={styles.search}>
                <input className={styles.search__bar} type="text" placeholder="Search..."/>
                <button className={styles.search__btn} type="submit"> <MdSearch size={20} /> </button>
            </div>

            <a className={styles.navBar__icons}><MdAccountCircle />Profile</a>
            <a className={styles.navBar__icons}><MdShoppingCart />Cart</a>
            <a className={styles.navBar__icons}><MdLogin /> Login</a>
        </div>
    );
}
export default NavBar;