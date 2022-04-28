import React, { useState, Fragment } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { BsCart3, BsArrowLeft } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
//import styles from "../styles/AdminManage.module.scss";
//import * as React from "react";
import Link from "next/link";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.scss";
import { useForm } from "react-hook-form";
type ModalProp = {
  addisOpen: boolean;
  addsetIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userRoleCustom: String;
};
import { useSession } from "next-auth/react";

const AddBook = ({ addisOpen, addsetIsOpen, userRoleCustom }: ModalProp) => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    sepFunc(data);
  };

  async function sepFunc(data) {
    console.log(data);
    const payload = { data: data };
    payload.data["userRole"] = userRoleCustom;
    payload.data["email"] = session?.user.email;
    await axios.post("/api/createbook", payload);
  }
  // const [cart, setCart] = useState<ShoppingCart[]>();
  console.log(userRoleCustom);
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
                                {...register("title")}
                              />

                              <label>Title</label>
                              <div className={styles.line}></div>
                            </div>
                            <div className={styles.form_content}>
                              <input
                                type="text"
                                placeholder=""
                                {...register("image")}
                              />

                              <label>Image</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="text"
                                placeholder=""
                                {...register("author")}
                              />
                              <label>Author</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="text"
                                placeholder=""
                                {...register("description")}
                              />
                              <label>Description</label>
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
                                {...register("isbn")}
                              />
                              <label>ISBN</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="text"
                                placeholder=""
                                {...register("genre")}
                              />
                              <label>Genre</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="text"
                                placeholder=""
                                {...register("price")}
                              />
                              <label>Price</label>
                              <div className={styles.line}></div>
                            </div>
                            <button type="submit">Update</button>
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
export default AddBook;
