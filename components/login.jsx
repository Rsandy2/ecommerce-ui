import { BeakerIcon } from "@heroicons/react/solid";
import styles from "../styles/Login.module.scss";

export default function LogIn(props) {
  return (
    <div className={styles.logInTest}>
      <div className={styles.logInLeftPanel}>
        <div className={styles.img}></div>
        <div className={styles.logInLeftTitleCard}>
          <h1>The Interactive look into new origins</h1>
          <p>
            The rousing soundtrack imbues the film with a thrilling power, and
            builds to a tremendous climax, offering an all-round exhilarating
            experience for the viewer.
          </p>
        </div>
      </div>
      <div className={styles.logInRightPanel}>
        <div className={styles.escapeLogIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className={styles.form_container}>
          <h1 className={styles.form_title}>Welcome</h1>

          <div className={styles.form_content}>
            <input type="text" required="required" />
            <label>Username</label>
            <div className={styles.line}></div>
          </div>

          <div className={styles.form_content}>
            <div className={styles.form_content}>
              <input type="text" required="required" />
              <label>Password</label>
              <div className={styles.line}></div>
            </div>

            <button>Login</button>

            <div className={styles.signUp}>Don't have an account?</div>
          </div>
        </div>
      </div>
    </div>
  );
}
