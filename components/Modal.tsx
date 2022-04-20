import styles from "../styles/Modal.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Modal: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const create = async (data: any) => {
    console.log(data);
    try {
      fetch("http://localhost:3000/api/create", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    } catch (err) {
      console.log("err");
    }
  };
  const onSubmit = (data: any) => {
    try {
      toast.promise(
        create(data),
        {
          loading: "Working on it...",
          success: "Submitted successfully!",
          error: "Oops! something went wrong.",
        },
        { duration: 3000 }
      );
    } catch (error: any) {
      // toast.error("Oops");
      console.log(error);
    }
  };
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
            \
            <form
              className={styles.form_containter}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles.container}>
                <input
                  id="name"
                  className={styles.form_input}
                  placeholder="Name"
                  required
                  {...register("name", { required: true, maxLength: 80 })}
                />
              </div>
              <div className={styles.container}>
                <input
                  id="Email"
                  placeholder="Email"
                  className={styles.form_input}
                  required
                  {...register("email", {})}
                />

                <input className={styles.button} type="submit" />
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
                    name="Data"
                    className={styles.form_input_left}
                    placeholder="Data"
                    required
                  />
                </div>
                <div className={styles.container}>
                  <input
                    name="Data"
                    placeholder="Data"
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
