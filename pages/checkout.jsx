import { useState } from "react"; // Using to handle forms?
import React from "react";
//import MenuSideBar from "../components/MenuSideBar";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import ReviewCard from "../components/productReviewCard";
import { getToken } from "next-auth/jwt";
import { prisma } from "../lib/prisma";
// Shift + Alt + F nice.

export async function getServerSideProps(context) {
  const session = await getToken(context);
  console.log("session", session);
  const books = await prisma.shoppingCart.findMany({
    where: {
      userId: `${session ? session["token"]["user"]["userId"] : ""}`,
    },
    select: {
      books: true,
    },
  });
  const userData = await prisma.user.findUnique({
    where: {
      id: `${session ? session["token"]["user"]["userId"] : ""}`,
    },
    select: {
      username: true,
      email: true,
    },
  });
  return {
    props: {
      books,
      userData,
    },
  };
}

export default function MyForm({ books, userData }) {
  console.log(books);
  console.log(userData);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("kvMbDFm5UqrDUyUvy");
    emailjs
      .send("service_t61tx0k", "template_927474s", {
        to_name: "iskerop",
        confirmation_number: "32e423423",
        message: "hunger games : qty 3",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [inputs, setInputs] = useState({});

  // Input handler stuff... that idk how it works...
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const checkoutHeader = {
    marginTop: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
  };

  const labelStyle = {
    paddingBottom: ".5rem",
  };

  const card = {
    backgroundColor: "white",
    padding: "3rem",
    boxShadow: "0px 2px 5px #B98B73",
    borderRadius: ".25rem",
    marginBottom: "1rem",
  };

  const reviewCard = {
    backgroundColor: "white",
    padding: "3rem",
    boxShadow: "0px 2px 5px #B98B73",
    borderRadius: ".25rem",
    //marginBottom: "1rem",
    minHeight: "200",
    maxHeight: "300",
  };

  const buttonStyle = {
    marginTop: "1rem",
    marginLeft: ".5rem",
  };

  return (
    // figure out validation and back-end access for forms...
    <div
      className="container-fluid min-h-screen w-screen"
      style={{
        color: "#1a202c",
        textAlign: "left",
        backgroundColor: "#DDBEA9",
        padding: "0",
      }}
    >
      {/* <MenuSideBar /> */}
      <Toaster />
      <div id="page-wrap">
        <div className="" style={{ backgroundColor: "#B98B73" }}>
          <Header />
          {/* <Banner /> */}
        </div>
        <div className="checkoutHeader" style={checkoutHeader}>
          <h1>Checkout</h1>
        </div>

        <div
          className="row gx-4"
          style={{
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <div className="col-lg-7 checkoutCol">
            <div className="card" style={card}>
              <h2>Order Summary</h2>
              <hr />
              <div className="row">
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-6">
                      <h6>Items: </h6>
                      <br></br>
                      <h6>Promos: </h6>
                      <br></br>
                      <h7>Promo Ex1: </h7>
                    </div>
                    <div className="col-sm-6" style={{ textAlign: "right" }}>
                      <h6>$amt</h6>
                      <br></br>
                      <h6>&nbsp;</h6>
                      <br></br>
                      <h7 style={{ color: "grey" }}>-$amt</h7>
                      <hr />
                      <h7>total $amt</h7>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4" style={{ textAlign: "center" }}>
                  <h5>Have a promo code?</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="row" style={{ paddingBottom: "3%" }}>
                      <input
                        className="form-control"
                        //style={{width: "90%"}}
                        type="text"
                        placeholder="Enter code here"
                        name="promoCode"
                        value={inputs.promoCode || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <input
                      className="py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                      type="submit"
                      value="Verify Code"
                      style={{ width: "100%" }}
                    />
                  </form>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2 style={{ color: "#900020" }}>Order Total: </h2>
                    </div>
                    <div className="col-sm-6">
                      <h2
                        style={{
                          ...{ float: "right" },
                          ...{ color: "#900020" },
                        }}
                      >
                        $amt
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={reviewCard}>
              <h2>Review Items and Shipping</h2>
            </div>
            <ReviewCard />
            <div className="card" style={card}>
              Have loop that generates cards...
            </div>
            <div className="card" style={card}>
              <h2 style={{ textAlign: "center" }}>
                I have reviewed my order and confirmed it to be correct.&nbsp;
              </h2>
              <input
                className="py-2 px-4 bg-green-500 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                type="submit"
                value="Place Order"
                //style={{ width: "100%" }}
              />
            </div>
          </div>

          <div className="col-lg-5 checkoutCol">
            <div className="card" style={card}>
              <h2>
                Shipping Address
                <hr />
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="row" style={{ paddingBottom: "3%" }}>
                  <div className="col-sm-6">
                    <label className="floatLeft" style={labelStyle}>
                      Full Name<br></br>
                      <input
                        className="form-control"
                        type="text"
                        name="shipName"
                        value={inputs.shipName || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <label style={labelStyle}>
                      State
                      <input
                        className="form-control"
                        type="text"
                        name="shipState"
                        value={inputs.shipState || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: "3%" }}>
                  <label style={labelStyle}>
                    Street <br></br>
                    <input
                      className="form-control"
                      //style={{ width: "100%" }}
                      type="text"
                      name="shipStreet"
                      value={inputs.shipStreet || ""}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="row" style={{ paddingBottom: "3%" }}>
                  <div className="col-sm-6">
                    <label style={labelStyle}>
                      Zip Code
                      <input
                        className="form-control"
                        type="number"
                        name="shipZip"
                        value={inputs.shipZip || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <label style={labelStyle}>
                      City
                      <input
                        className="form-control"
                        type="text"
                        name="shipCity"
                        value={inputs.shipCity || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                <input
                  className="py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  type="submit"
                  value="Update"
                  style={{ width: "100%" }}
                />
              </form>
            </div>
            <div className="card" style={card}>
              <h2>
                Payment Method
                <hr />
              </h2>

              <div style={{ display: "flex" }}>
                <span>We accept debit and credit cards&nbsp;&nbsp;</span>
                <img src="https://i.imgur.com/2ISgYja.png" width="30"></img>
                <img src="https://i.imgur.com/W1vtnOV.png" width="30"></img>
                <img src="https://i.imgur.com/35tC99g.png" width="30"></img>
              </div>
              <form onSubmit={handleSubmit}>
                <div
                  className="row"
                  style={{
                    ...{ paddingBottom: "3%" },
                    ...{ paddingTop: "3%" },
                  }}
                >
                  <div className="col-sm-6">
                    <label className="floatLeft" style={labelStyle}>
                      Cardholder Name<br></br>
                      <input
                        className="form-control"
                        type="text"
                        name="payName"
                        value={inputs.payName || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <label style={labelStyle}>
                      Card Expiration Date
                      <input
                        className="form-control"
                        type="text"
                        name="payExpDate"
                        value={inputs.payExpDate || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: "3%" }}>
                  <div className="col-sm-6">
                    <label style={labelStyle}>
                      Card Number <br></br>
                      <input
                        className="form-control"
                        type="text"
                        name="payCardNum"
                        //placeholder="0000-0000-0000-0000"
                        value={inputs.payCardNum || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <label style={labelStyle}>
                      CCV
                      <input
                        className="form-control"
                        type="text"
                        name="payCCV"
                        value={inputs.payCCV || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: "3%" }}>
                  <div className="col-sm-6">
                    <label style={labelStyle}>
                      Street
                      <input
                        className="form-control"
                        type="text"
                        name="payStreet"
                        value={inputs.payStreet || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <label style={labelStyle}>
                      City
                      <input
                        className="form-control"
                        type="text"
                        name="payCity"
                        value={inputs.payCity || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: "3%" }}>
                  <div className="col-sm-6">
                    <label style={labelStyle}>
                      State
                      <input
                        className="form-control"
                        type="text"
                        name="payState"
                        value={inputs.payState || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <label style={labelStyle}>
                      Zip Code
                      <input
                        className="form-control"
                        type="number"
                        name="payZip"
                        value={inputs.payZip || ""}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>

                <input
                  className="py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  type="submit"
                  value="Update"
                  style={{ width: "100%" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
