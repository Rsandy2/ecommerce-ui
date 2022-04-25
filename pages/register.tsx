import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.scss";

export default function RegisterPage() {
  const [userRole, setUserRole] = useState("user");
  const [isForwardable, setisForwardable] = useState(false);
  return (
    <>
      <button
        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        onClick={() => {
          setUserRole("user"), setisForwardable(true);
        }}
      >
        Set User
      </button>
      <button
        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        onClick={() => {
          setUserRole("vendor"), setisForwardable(true);
        }}
      >
        Set Vendor
      </button>

      <div>Current User: {userRole.toUpperCase()}</div>
      {isForwardable ? <Register userRole={userRole} /> : null}
    </>
  );
}

function Register(props: any) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const registerUser = async (event: any) => {
    event.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
      userRole: props.userRole,
    };

    await axios.post("/api/register", data);
    // fetch("/api/register", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });

    signIn("credentials", {
      username,
      email,
      password,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    })
      .then(function (result: any) {
        router.push(result.url);
      })
      .catch((err) => {
        console.log("Failed to register outside: " + err.toString());
      });
  };

  return (
    <div className="bg-slate-500 h-screen w-full flex justify-center items-center">
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
            <h1 className={styles.form_title}>Register: {props.userRole}</h1>

            <form onSubmit={registerUser}>
              <div className={styles.form_content}>
                <input
                  type="text"
                  value={username}
                  // required="required"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>Username</label>
                <div className={styles.line}></div>
              </div>
              <div className={styles.form_content}>
                <input
                  type="text"
                  value={email}
                  // required="required"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
                <div className={styles.line}></div>
              </div>

              <div className={styles.form_content}>
                <input
                  type="text"
                  value={password}
                  // required="required"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
                <div className={styles.line}></div>
              </div>

              <button type="submit">Register</button>
            </form>
            <div className={styles.signUp}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
