import * as React from "react";
import Link from "next/link";
import { useState, Fragment } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.scss";
import { Dialog, Transition } from "@headlessui/react";

export default function RegisterPage() {
  const [userRole, setUserRole] = useState("user");
  const [isForwardable, setisForwardable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true)
  // }

  return (
    <>
      <div className="flex w-full h-screen justify-center items-center bg-p1">
        <div className="flex flex-col justify-center items-center bg-white w-96 h-96 shadow-2xl">
          <h2 className="py-2 text-coffee">Select user type: </h2>
          <button
            className="w-80 py-2 px-4 mx-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            onClick={() => {
              setUserRole("user"), setisForwardable(true), setIsOpen(true);
            }}
          >
            Set User
          </button>
          <button
            className="w-80 py-2 px-4 my-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            onClick={() => {
              setUserRole("vendor"),
                setisForwardable(true),
                isForwardable ? setIsOpen(true) : setIsOpen(false);
            }}
          >
            Set Vendor
          </button>

          <p>
            Have an account already? <Link href="/login">login</Link>{" "}
          </p>
        </div>
      </div>

      {/* <div>Current User: {userRole.toUpperCase()}</div> */}
      {isForwardable ? <Register userRole={userRole} /> : null}
      {/* {isOpen ? <Register userRole={userRole} /> : null} */}
    </>
  );
}

function Register(props: any) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [isOpen, setIsOpen] = useState(true);

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

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center"
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <div className="text-center flex flex-col min-w-full px-10">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>
              <span className="" aria-hidden="true">
                &#8203;
              </span>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* modal content */}
                <div>
                  <div className=" h-screen w-full flex justify-center items-center">
                    <div className={styles.logInTest} >
                      <div className={styles.logInRightPanel} style={{ width: "90%" }}>
                        <div
                          className={styles.escapeLogIn}
                          onClick={closeModal}
                        >
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
                          <h1 className={styles.form_title}>
                            Register: {props.userRole}
                          </h1>

                          <form onSubmit={registerUser}>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className={styles.form_content}>
                                  <input
                                    type="text"
                                    value={email}

                                    required="required"
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                  <label>Full Name</label>
                                  <div className={styles.line}></div>
                                </div>

                                <div className={styles.form_content}>
                                  <input
                                    type="date"
                                    value={email}
                                    required="required"
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                  <label>Birth Date</label>
                                  <div className={styles.line}></div>
                                </div>

                                <div className={styles.form_content}>
                                  <input
                                    type="text"
                                    value={email}
                                    required="required"
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                  <label>City</label>
                                  <div className={styles.line}></div>
                                </div>

                                
                                <div className={styles.form_content}>
                                  <input
                                    type="text"
                                    value={email}
                                    required="required"
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                  <label>Zip Code</label>
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

                              </div>
                              <div className="col-lg-6">
                                <div className={styles.form_content}>
                                  <input
                                    type="text"
                                    value={email}

                                    required="required"
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                  <label>Email</label>
                                  <div className={styles.line}></div>
                                </div>
                                <div className={styles.form_content}>
                                  <input
                                    type="text"
                                    value={email}
                                    required="required"
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                  <label>Street</label>
                                  <div className={styles.line}></div>
                                </div>
                              
                                <div className={styles.form_content}>
                                  <input
                                    type="text"
                                    value={email}
                                    required="required"
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                  <label>State</label>
                                  <div className={styles.line}></div>
                                </div>

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
                                  <label>Confirm Password</label>
                                  <div className={styles.line}></div>
                                </div>

                                <button type="submit">Register</button>
                              </div>
                            </div>
                          </form>
                          <div className={styles.signUp}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end of modal   */}
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}
