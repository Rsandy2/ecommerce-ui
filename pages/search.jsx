import SideBar from "../components/sideBar";
import Header from "../components/Header";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

export default function Home() {
  toast((t) => <span>Search: Nothing!</span>);

  const card = {
    backgroundColor: "white",
    padding: "3rem 3rem 3rem 3rem",
    boxShadow: "0px 2px 5px #B98B73",
    borderRadius: ".5rem",
    marginTop: "1rem",
  };

  return (
    <div
      className="min-h-screen w-screen"
      style={{ backgroundColor: "#dfbea9" }}
    >
      {/* <MenuSideBar /> */}
      <Toaster />
      <div id="page-wrap">
        <div className="" style={{ backgroundColor: "#B98B73" }}>
          <Header />
          {/* <Banner /> */}
        </div>
        <div className="container-lg my-4">
          <h1>Search: No Results</h1>
          <div className="row">
            <div className="col-lg-3 col-sm-3">
              <SideBar />
            </div>
            <div className="col">
              <div className="container text-md-center" style={card}>
                <h2>Hmmm no results, try searching for something else!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
