import React, { useState, Fragment } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { useForm } from "react-hook-form";

import { BsCart3, BsArrowLeft } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
//import styles from "../styles/AdminManage.module.scss";
//import * as React from "react";
import Link from "next/link";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.scss";

type ModalProp = {
  addisOpen: boolean;
  addsetIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddUser = ({ addisOpen, addsetIsOpen }: ModalProp) => {
  // const [cart, setCart] = useState<ShoppingCart[]>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <div>
        <Transition appear show={addisOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center"
            onClose={addsetIsOpen}
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
                {/* cart */}

                <div className="container" style={{ maxWidth: "50%" }}>
                  <div className="card">
                    <div className={styles.form_container}>
                      <h1 className={styles.form_title}>Add</h1>

                      <form onSubmit={handleSubmit(onSubmit)}>
                        {/*onSubmit={registerUser}>*/}
                        <div className="row">
                          <div className="col-lg-6">
                            <div className={styles.form_content}>
                              <input
                                type="text"
                                placeholder=""
                                {...register("username", {
                                  required: true,
                                  maxLength: 20,
                                })}
                              />

                              <label>Username</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="text"
                                placeholder=""
                                {...register("email", {
                                  required: true,
                                  pattern: /^\S+@\S+$/i,
                                })}
                              />

                              <label>Email</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="password"
                                placeholder=""
                                {...register("password", {
                                  required: true,
                                  min: 4,
                                })}
                              />

                              <label>Password</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <select
                                {...register("userRole", { required: true })}
                              >
                                <option value="user">User</option>
                                <option value="vendor">Vendor</option>
                              </select>

                              <div className={styles.line}></div>
                              <label>UserRole</label>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="datetime"
                                placeholder=""
                                {...register("birthDate", {})}
                              />

                              <label>BirthDate</label>
                              <div className={styles.line}></div>
                            </div>

                            <button onClick={() => addsetIsOpen(false)}>
                              Back
                            </button>
                          </div>
                          <div className="col-lg-6">
                            <div className={styles.form_content}>
                              <input
                                type="text"
                                placeholder=""
                                {...register("address", {})}
                              />

                              <label>Address</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="text"
                                placeholder=""
                                {...register("city", {})}
                              />
                              <label>City</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="text"
                                placeholder=""
                                {...register("state", {})}
                              />

                              <label>State</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="text"
                                placeholder=""
                                {...register("zipcode", {})}
                              />

                              <label>Zip Code</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="tel"
                                placeholder=""
                                {...register("phonenumber", {
                                  required: true,
                                  minLength: 6,
                                  maxLength: 12,
                                })}
                              />

                              <label>Phone Number</label>
                              <div className={styles.line}></div>
                            </div>
                            <button type="submit">Add</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* end of cart  */}
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};
export default AddUser;
