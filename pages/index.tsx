import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import toast, { Toaster } from "react-hot-toast";
import Login from "../components/login";
import Signup from "../components/signup";
import Modal from "../components/Modal";
import Owner from "../components/Owner";
import Confirmation from "../components/Confirmation";

const notify = () => toast("Here is a toast.");
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Signup /> */}

      {/* <button className={styles.button} onClick={notify}>
        TOASTER
      </button> */}
      {/* <Confirmation /> */}
      <Owner />
      <Toaster />
    </div>
  );
};

export default Home;
