import styles from "../styles/Modal.module.scss";
import { useState } from "react";

const Owner: React.FC = () => {
  return (
    <>
      <div className={styles.topLevelContainer}>
        <div className={styles.topLevelContainerLeft}>
          <div className={styles.Navigation}>
            <div className={styles.logo}>
              <h3>
                <span>Ecommerce</span>UI
              </h3>
            </div>

            <div className={styles.navLink}>
              <h3>Confirmation</h3>
            </div>
          </div>
          <div className={styles.OrderContainer}>
            <div className={styles.textContent}>
              <h1>Thank you for your purchase</h1>
              <p>Your order will be shipped to #location</p>
            </div>
            <form className={styles.form_containter} noValidate>
              If you'd like to join our newsletter, please enter your email
              below
              <div className={styles.container}>
                <input
                  name="Data"
                  className={styles.form_input}
                  placeholder="Data"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Owner;
