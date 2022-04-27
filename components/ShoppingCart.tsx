import React, { useState, Fragment, useContext, useEffect } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { BsCart3, BsArrowLeft } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
import CartContext from "../components/context/cartContext";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

type ModalProp = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShoppingCart = ({ isOpen, setIsOpen }: ModalProp) => {
  // const [cart, setCart] = useState<ShoppingCart[]>();
  const cart = useContext(CartContext);
  const [bookData, setBookData] = useState({ isbn: "", session: "" });
  const [cartData, setCartData] = useState<any>([
    { title: "", author: "", price: "", image: "" },
  ]);
  const [totalData, setTotalData] = useState(0);
  const { data: session } = useSession();
  const router = useRouter();
  async function deleteCartItem(data: any) {
    const dataP = {
      isbn: data,
      userId: session.user["userId"],
    };
    await axios.post("api/cartdelete", dataP);
    router.reload();
  }
  useEffect(() => {
    // let cartObject = cart[0] ? Object.assign(cart[0]["books"]) : {};
    //   let cartObject = {};
    // setCartData(cartObject);
  }, [setCartData, setTotalData, setBookData]);

  return (
    <>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center"
            onClose={setIsOpen}
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
                <div className="relative bg-gray-100">
                  <div className="flex">
                    {/* Left container */}
                    <div className="w-3/4 bg-white px-10 py-10">
                      <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">
                          Shopping Cart
                        </h1>
                        <h2 className="font-semibold text-2xl">3 Items</h2>
                      </div>
                      <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                          Product Details
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                          Quantity
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                          Price
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                          Total
                        </h3>
                      </div>

                      {/* product */}
                      {Object.keys(cartData).length > 0
                        ? cartData.map(
                            (cartItem: any) => (
                              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div className="flex w-2/5">
                                  <div className="w-20">
                                    <img
                                      className="h-24"
                                      src={cartItem["image"]}
                                      alt=""
                                    ></img>
                                  </div>
                                  <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">
                                      {cartItem["title"]}
                                    </span>
                                    <span className="text-red-500 text-xs">
                                      {cartItem["author"]}
                                    </span>
                                    <button
                                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                                      onClick={() => {
                                        deleteCartItem(cartItem["isbn"]);
                                      }}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                                <div className="flex justify-center w-1/5">
                                  <button data-action="">
                                    <BsDash size="2rem" />
                                  </button>
                                  <input
                                    className="appearance-none mx-2 border text-center w-8 outline-none focus:outline-none"
                                    value="1"
                                  ></input>
                                  <button data-action="">
                                    <BsPlus size="2rem" />
                                  </button>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                  {/* ${cart["price"]}.00 */}
                                </span>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                  $400.00
                                </span>
                              </div>
                            )
                            // console.log(Object.keys(cartItem))
                          )
                        : null}
                      {/* product */}
                      {/* <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex w-2/5">
                          <div className="w-20">
                            <img
                              className="h-24"
                              src="https://www.adobe.com/express/create/cover/media_178ebed46ae02d6f3284c7886e9b28c5bb9046a02.jpeg?width=400&format=jpeg&optimize=medium"
                              alt=""
                            ></img>
                          </div>
                          <div className="flex flex-col justify-between ml-4 flex-grow">
                            <span className="font-bold text-sm">
                              Lunar Storm
                            </span>
                            <span className="text-red-500 text-xs">
                              Terry Crosby
                            </span>
                            <a
                              href="#"
                              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                            >
                              Remove
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                          <button data-action="">
                            <BsDash size="2rem" />
                          </button>
                          <input
                            className="appearance-none mx-2 border text-center w-8 outline-none focus:outline-none"
                            value="1"
                          ></input>
                          <button data-action="">
                            <BsPlus size="2rem" />
                          </button>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          $400.00
                        </span>
                        <span className="text-center w-1/5 font-semibold text-sm">
                          $400.00
                        </span>
                      </div> */}

                      {/* continue shopping */}
                      <button
                        onClick={() => setIsOpen(false)}
                        className="flex font-semibold text-indigo-600 text-sm mt-10"
                      >
                        <BsArrowLeft size="1.4rem" className="pr-2" />
                        Continue Shopping
                      </button>
                    </div>

                    {/* Right container */}
                    <div
                      id="summary"
                      className="w-1/4 px-8 py-10 flex flex-col"
                    >
                      <h1 className="font-semibold text-2xl border-b pb-8">
                        Order Summary
                      </h1>
                      <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">
                          Subtotal
                        </span>
                        <span className="font-semibold text-sm">$800</span>
                      </div>

                      <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">
                          Shipping
                        </label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                          <option>Standard shipping-$10.00</option>
                        </select>
                      </div>

                      <div className="py-10">
                        <label
                          htmlFor="promo"
                          className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                          Promo Code
                        </label>
                        <input
                          type="text"
                          id="promo"
                          placeholder="Enter your code"
                          className="p-2 text-sm w-full"
                        ></input>
                      </div>
                      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                        Apply
                      </button>

                      <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                          <span>Total cost</span>
                          <span>${totalData}</span>
                        </div>
                        {/* checkout button */}
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="bg-indigo-500 font-semibold hover:bg-indigo-600 hover:cursor-pointer py-3 text-sm text-white uppercase w-full"
                        >
                          Checkout
                        </button>
                      </div>
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
export default ShoppingCart;
