import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import toast, { Toaster } from "react-hot-toast";
import Login from "../components/login";
import Modal from "../components/Modal";

const notify = () => toast("Here is a toast.");
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Login /> */}

      {/* <button className={styles.button} onClick={notify}>
        TOASTER
      </button> */}
      <Modal />
      <Toaster />
    </div>
  );
};

export default Home;
