import styles from "../styles/Modal.module.scss";
import { useState } from "react";

const Modal: React.FC = () => {
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
              <h3>Order Confirmation</h3>
            </div>
          </div>
          <div className={styles.OrderContainer}>
            <div className={styles.textContent}>
              <h1>Do Something</h1>
              <p>Do something subtext</p>
            </div>

            <form className={styles.form_containter} noValidate>
              <div className={styles.container}>
                <input
                  name="Title"
                  className={styles.form_input}
                  placeholder="Title"
                  required
                />
              </div>
              <div className={styles.container}>
                <input
                  name="Image"
                  placeholder="Image Link"
                  className={styles.form_input}
                  required
                />
              </div>
              {/* <div className={styles.container}>
                <input
                  name="Message"
                  placeholder="Enter Message"
                  className={styles.form_input}
                  required
                />
              </div> */}
              {/* <input className={styles.form_submit} type="submit" /> */}

              <h2 className={styles.decorated}>
                <span>Additional Info</span>
              </h2>

              <div className={styles.additionalInfo}>
                <div className={styles.container}>
                  <input
                    name="Title"
                    className={styles.form_input_left}
                    placeholder="Title"
                    required
                  />
                </div>
                <div className={styles.container}>
                  <input
                    name="Image"
                    placeholder="Image Link"
                    className={styles.form_input_right}
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.topLevelContainerRight}>
          <div className={styles.nested_right_container}>
            <div className={styles.imgholder}>
              <img src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15.fit_scale.size_1028x578.v1602794215.png" />
            </div>
            <div className={styles.rightPanelTextContent}>
              <div className={styles.textContent}>
                <p>Credit Card</p>
                <h2>Paypal Card</h2>
              </div>
            </div>
            <div className={styles.rightPanelDebugContent}>
              <ul>
                <li>
                  <h3>Debug Data</h3>
                  <p>Content info warning</p>
                </li>
                <li>
                  <h3>Debug Data</h3>
                  <p>Content info warning</p>
                </li>
                <li>
                  <h3>Debug Data</h3>
                  <p>Content info warning</p>
                </li>
              </ul>
            </div>

            <div className={styles.price}>
              <h2>$4.99</h2>
              <button className={styles.checkout}>
                <h2>Checkout</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
