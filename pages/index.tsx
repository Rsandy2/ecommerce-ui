import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import toast, { Toaster } from "react-hot-toast";
import Login from "../components/login";
import Signup from "../components/signup";
import Modal from "../components/Modal";
import Owner from "../components/Owner";
import Confirmation from "../components/Confirmation";
import Query from "../components/Query";
import Edit from "../components/Edit";
import TestLogin from "../components/TestLogin";

import { useForm } from "react-hook-form";

const notify = () => toast("Here is a toast.");
const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const CLOG = (data: any): any => console.log(data);
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
  return (
    <div className={styles.container}>
      {/* <button className={styles.button} onClick={notify}>
        TOASTER
      </button> */}
      {/* <Login /> */}
      <TestLogin />
      {/* <Confirmation /> */}
      {/* <Modal /> */}
      {/* <Query /> */}
      {/* <Edit /> */}
      <Toaster />
    </div>
  );
};

export default Home;
