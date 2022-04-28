import toast, { Toaster } from "react-hot-toast";
import Header from "../components/Header";

export default function () {
  const card = {
    backgroundColor: "white",
    padding: "3rem 3rem 5rem 3rem",
    boxShadow: "0px 2px 5px #B98B73",
    borderRadius: ".5rem",
    marginBottom: "1rem",
    marginTop: "2rem",
  };

  const listStyle = {
    paddingLeft: "0rem",
  };

  const listItemStyle = {
    paddingBottom: ".5rem",
  };
  return (
    <div
      className="min-h-screen w-screen"
      style={{ backgroundColor: "#dfbea9" }}
    >
      <Toaster />
      <div className="" style={{ backgroundColor: "#B98B73" }}>
        <Header />
        {/* <Banner /> */}
      </div>
      <div id="page-wrap" className="container-sm" style={card}>
        <h2>Hello @Username</h2>
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <h4 style={{ fontWeight: "bold" }}>Profile</h4>
            <ul style={listStyle}>
              <li style={listItemStyle}>Username: Poptart55</li>
              <li style={listItemStyle}>Password: *****</li>
              <li style={listItemStyle}>Email: example@gmail.com</li>
              <li style={listItemStyle}>Birthday: 04/12</li>
              <li style={listItemStyle}>
                Address: 123 Roadway Street, Cityville, 40044 GA
              </li>
            </ul>
            <button
              className="btn btn-primary"
              style={{ boxShadow: "0px 2px 5px lightgray" }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
