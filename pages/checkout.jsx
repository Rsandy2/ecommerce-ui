import { useState } from "react"; // Using to handle forms?
import React from "react";
import MenuSideBar from "../components/MenuSideBar";
import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
// Shift + Alt + F nice.

export default function MyForm() {
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
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  };

  const card = {
    backgroundColor: "white",
    padding: "3rem 3rem 5rem 3rem",
    boxShadow: "0px 2px 5px #B98B73",
    borderRadius: ".25rem",
    marginBottom: "1rem",
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
      <MenuSideBar />
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
          <div className="col-8 checkoutCol">
            <div className="card" style={card}>
              <h2>
                Shipping Address
                <hr />
              </h2>
              <form onSubmit={handleSubmit}>
                <label className="floatLeft" style={labelStyle}>
                  Full Name<br></br>
                  <input
                    className="form-control"
                    type="text"
                    name="shipName"
                    value={inputs.shipName || ""}
                    onChange={handleChange}
                    //style={{width: "100%"}}
                  />
                </label>
                <br></br>
                <label style={labelStyle}>
                  Street: <br></br>
                  <input
                    className="form-control"
                    type="text"
                    name="shipStreet"
                    value={inputs.shipStreet || ""}
                    onChange={handleChange}
                  />
                </label>
                <br></br>
                <label style={labelStyle}>
                  State:
                  <input
                    className="form-control"
                    type="text"
                    name="shipState"
                    value={inputs.shipState || ""}
                    onChange={handleChange}
                  />
                </label>
                <label style={labelStyle}>
                  City:
                  <input
                    className="form-control"
                    type="text"
                    name="shipCity"
                    value={inputs.shipCity || ""}
                    onChange={handleChange}
                  />
                </label>
                <label style={labelStyle}>
                  Zip Code:
                  <input
                    className="form-control"
                    type="number"
                    name="shipZip"
                    value={inputs.shipZip || ""}
                    onChange={handleChange}
                  />
                </label>
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={buttonStyle}
                >
                  Update
                </button>
              </form>
            </div>
            <div className="card" style={card}>
              <h2>Payment Method</h2>
              <form onSubmit={handleSubmit}>
                <label style={labelStyle}>
                  Name on Card:
                  <input
                    className="form-control"
                    type="text"
                    name="payName"
                    value={inputs.payName || ""}
                    onChange={handleChange}
                  />
                </label>
                <label style={labelStyle}>
                  Card Number:
                  <input
                    className="form-control"
                    type="text"
                    name="cardNum"
                    value={inputs.cardStreet || ""}
                    onChange={handleChange}
                  />
                </label>
                <label style={labelStyle}>
                  CCV:
                  <input
                    className="form-control"
                    type="text"
                    name="ccvNum"
                    value={inputs.ccvNum || ""}
                    onChange={handleChange}
                  />
                </label>
                <label style={labelStyle}>
                  Street: <br></br>
                  <input
                    className="form-control"
                    type="text"
                    name="payStreet"
                    value={inputs.payStreet || ""}
                    onChange={handleChange}
                  />
                </label>
                <label style={labelStyle}>
                  State:
                  <input
                    className="form-control"
                    type="text"
                    name="payState"
                    value={inputs.payState || ""}
                    onChange={handleChange}
                  />
                </label>
                <label style={labelStyle}>
                  City:
                  <input
                    className="form-control"
                    type="text"
                    name="payCity"
                    value={inputs.payCity || ""}
                    onChange={handleChange}
                  />
                </label>
                <label style={labelStyle}>
                  Zip Code:
                  <input
                    className="form-control"
                    type="number"
                    name="payZip"
                    value={inputs.payZip || ""}
                    onChange={handleChange}
                  />
                </label>
                <br></br>
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={buttonStyle}
                >
                  Update
                </button>
              </form>
            </div>
            <div className="card" style={card}>
              <h2>Review Items and Shipping</h2>
              <h1>Have a loop component to generate product cards?</h1>
            </div>
          </div>
          <div className="col-sm-4 checkoutCol">
            <div className="card" style={card}>
              <h2>Order Summary</h2>
              <h7>Items (var item amt here?) </h7>
              <h7>float right $amt</h7>
              <h7>Books Reserved (reserved book amt here?) </h7>
              <h7>-float right $amt</h7>
              <hr />
              <h2>Order Total: </h2>
              <h2>float right $amt</h2>
              <hr />
              <form>
                <input
                  className="mt-2 mb-5 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  type="submit"
                  value="Place Order"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//ReactDOM.render(<MyForm />, document.getElementById("root"));
