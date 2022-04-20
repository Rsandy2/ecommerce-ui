import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import FloatingInput from "../components/floatingInput";
import Header from "../components/Header";
import toast, { Toaster } from "react-hot-toast";

function Profile() {
  // const [selectedTab, setSelectedTab] = useState();

  const handleAccountUpdate = () => {
    console.log("account update button pressed");
    toast.success("Successfully Updated");
  };

  const handleAddressUpdate = () => {
    console.log("address update button pressed");
    toast.success("Successfully Updated");
  };

  const handleBillingUpdate = () => {
    console.log("billing update button pressed");
    toast.success("Successfully Updated");
  };

  // const handleTabChange = (newValue) => {
  //   setSelectedTab(newValue);
  // };

  // console.log(selectedTab);

  /*
  What if... we enclosed all the textboxes in one form and only have one update button? :thinking:
  */
  const AccountDetails = () => {
    return (
      <div>
        <h3>Account Details</h3>
        <div className="row">
          <div className="col-lg-6">
            <FloatingInput
              title="Full Name"
              id="name"
              type="text"
              value="Example Person"
            />
            <FloatingInput
              title="Email"
              id="email"
              type="email"
              value="example@uga.edu"
            />
          </div>
          <div className="col-lg-6">
            <FloatingInput title="Birth Date" id="birthday" type="Date" value="" />
            <FloatingInput title="Phone" id="phone" type="tel" value="1234567890" />
          </div>
        </div>

        <a href="#">Forgot Password? [Don't implement unless we have time]</a>
        <label className="form-check-label" for="checkSubscribe" style={{ float: "right" }}>
          <input className="form-check-input" type="checkbox" value="" id="checkSubscribe"></input>
          &nbsp;&nbsp;&nbsp;Keep me subscribed to emails and promotions

        </label>


        <br></br>
        <br></br>
        <hr />
      </div>
    );
  };
  const AddressDetails = () => {
    return (
      <div>
        <h3>Address Details</h3>
        <div className="row">
          <div className="col-lg-6">
            <FloatingInput
              title="Street"
              id="addressStreet"
              type="text"
              value="170 Rainbow Ave for billing"
            />

            <FloatingInput title="State" id="adressState" type="text" value="Georgia" />

          </div>
          <div className="col-lg-6">
            <FloatingInput title="City" id="addressCity" type="text" value="Athens" />
            <FloatingInput title="Zip Code" id="addressCip" type="text" value="30609" />
          </div>
        </div>
        <hr />
      </div>
    );
  };

  const BillingDetails = () => {
    return (
      <div>
        <h3>Billing Address Details</h3>
        <div className="row">
          <div className="col-lg-6">
            <FloatingInput
              title="Cardholder Name"
              id="billCardName"
              type="text"
              value="Doug Dimadome"
            />
            <FloatingInput title="Expiration Date" id="billExpDate" type="text" value="type Date instead?" />
            <FloatingInput title="Street" id="billStreet" type="text" value="123 Wacky Way" />
            <FloatingInput title="State" id="billState" type="text" value="Sus State" />
          </div>
          <div className="col-lg-6">
            <FloatingInput title="Card Number" id="billCardNum" type="text" value="1234-1234-1234-1234" />
            <FloatingInput title="CCV" id="billCCV" type="text" value="123" />
            <FloatingInput title="City" id="billCity" type="text" value="Psych Port Town" />
            <FloatingInput title="Zip Code" id="billZip" type="text" value="1234" />
          </div>
        </div>
        <hr />
      </div>
    );
  };

  const card = {
    backgroundColor: "white",
    padding: "3rem 3rem 5rem 3rem",
    boxShadow: "0px 2px 5px #B98B73",
    borderRadius: ".25rem",
    marginBottom: "1rem",
  };

  return (
    <div
      className="min-h-screen w-screen"
      style={{ backgroundColor: "#dfbea9" }}
    >
      <Toaster />
      <div id="page-wrap">
        <div className="" style={{ backgroundColor: "#B98B73" }}>
          <Header />
          {/* <Banner /> */}
        </div>
        <div className="container-sm my-4" style={card}>
          <h1>My Account</h1>
          <hr />
          <div className="row">
            <div className="col">
              <AccountDetails />

              <AddressDetails />
              <BillingDetails />
              <input
                className="py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                type="submit"
                value="Save Changes"
                style={{ float: "right" }}
              />
              <input
                className="py-2 px-4 bg-red-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                type="submit"
                value="Delete Account"
                style={{ float: "left" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

/*
        <h3>Payment Methods</h3>
        <form action="">
          <div className="row my-2">
            <div className="col-3">
              <a href="#">VISA ...7890</a>
            </div>
            <div className="col">
              <button className="btn btn-danger">Remove</button>
            </div>
          </div>
        </form>
        <div className="row my-2">
          <div className="col-3">
            <a href="#">DISCOVER ...7890</a>
          </div>
          <div className="col">
            <button className="btn btn-danger">Remove</button>
          </div>
        </div>
        <br />
        <a href="#">Add Payment Method</a>
*/
