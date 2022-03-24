import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is a toast.");
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={notify}>
        TOASTER
      </button>
      <Toaster />
    </div>
  );
};

export default Home;
