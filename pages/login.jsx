import Head from "next/head";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { BeakerIcon } from "@heroicons/react/solid";
import styles from "../styles/Login.module.scss";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginStarted, setIsLoginStarted] = useState(false);
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.query.error) {
      setLoginError(router.query.error);
      setUsername(router.query.username);
    }
  }, [router]);

  const handleLogin = (event) => {
    event.preventDefault();
    event.stopPropagation();

    signIn("credentials", {
      username,
      password,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    }).then(function (result) {
      if (result.error !== null) {
        if (result.status === 401) {
          setLoginError(
            "Your username/password combination was incorrect. Please try again"
          );
        } else {
          setLoginError("Outside Login", result.error);
        }
      } else {
        router.push(result.url);
      }
    });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center" style={{backgroundColor: "#DDBEA9"}}>
      <div className={styles.logInTest}>
        <div className={styles.logInLeftPanel}>
          <div className={styles.img}></div>
          <div className={styles.logInLeftTitleCard}>
            <h1>Knowledge at your fingertips</h1>
            <p>
            Bogus Books offers a wide variety of books at your perusal. 
            Finding and buying a book you like has never been easier.
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

            <form onSubmit={handleLogin}> {/*  USERNAME INSTEAD*/}
              {loginError}
              <div className={styles.form_content}>
                <input
                  type="text"
                  value={username}
                  required="required"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>Username</label>
                <div className={styles.line}></div>
              </div>

              <div className={styles.form_content}>
                <input
                  type="password"
                  value={password}
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
                <div className={styles.line}></div>
              </div>

              <button type="submit">Login</button>
            </form>
            <div className={styles.signUp}>
              Don't have an account? <Link href="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
