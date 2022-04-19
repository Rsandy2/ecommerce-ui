import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import FloatingInput from "../components/floatingInput";
import NavBar from "../components/navBar";
import toast, { Toaster } from "react-hot-toast";

function Profile() {
  const [selectedTab, setSelectedTab] = useState();

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

  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
  };

  console.log(selectedTab);

  const AccountDetails = () => {
    return (
      <div>
        <h3>Account Details</h3>
        <FloatingInput
          title="Full Name"
          id="name"
          type="text"
          value="Example Person"
        />
        <FloatingInput title="Phone" id="phone" type="tel" value="1234567890" />
        <FloatingInput
          title="Email"
          id="email"
          type="email"
          value="example@uga.edu"
        />
        <a href="#">Change Password</a>
        <br />
        <button className="btn btn-primary my-4">Update</button>
      </div>
    );
  };
  const AddressDetails = () => {
    return (
      <div>
        <h3>Address Details</h3>
        <FloatingInput
          title="Street 1"
          id="street1"
          type="text"
          value="170 Rainbow Ave for billing"
        />
        <FloatingInput
          title="Street 2"
          id="street2"
          type="text"
          value="Apt 320"
        />
        <FloatingInput title="City" id="city" type="text" value="Athens" />
        <FloatingInput title="State" id="state" type="text" value="Georgia" />
        <FloatingInput title="Zip Code" id="zip" type="text" value="30609" />
        <FloatingInput
          title="Country"
          id="country"
          type="text"
          value="United States"
        />
        <button className="btn btn-primary my-4">Update</button>
      </div>
    );
  };

  const BillingDetails = () => {
    return (
      <div>
        <h3>Billing Address Details</h3>
        <FloatingInput
          title="Street 1"
          id="street1"
          type="text"
          value="170 Rainbow Ave"
        />
        <FloatingInput
          title="Street 2"
          id="street2"
          type="text"
          value="Apt 320"
        />
        <FloatingInput title="City" id="city" type="text" value="Athens" />
        <FloatingInput title="State" id="state" type="text" value="Georgia" />
        <FloatingInput title="Zip Code" id="zip" type="text" value="30609" />
        <FloatingInput
          title="Country"
          id="country"
          type="text"
          value="United States"
        />
        <button className="btn btn-primary my-4">Update</button>
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
      </div>
    );
  };

  return (
    <div>
      <Toaster />
      <NavBar />
      <div className="container-sm my-4">
        <h1>My Account</h1>
        <hr />
        <div className="row">
          {/* <div className="col-3">
            <nav className="navbar nav-pills navbar-light bg-light flex-column align-items-stretch p-3">
              <button
                className="btn btn-white my-2"
                onClick={() => handleTabChange(AccountDetails)}
              >
                Account
              </button>
              <a
                className="btn btn-white my-2"
                onClick={() => handleTabChange(AddressDetails)}
              >
                Address
              </a>
              <a
                className="btn btn-white my-2"
                onClick={() => handleTabChange(BillingDetails)}
              >
                Billing
              </a>
            </nav>
          </div> */}
          <div className="col">
            <AccountDetails />
            <AddressDetails />
            <BillingDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
