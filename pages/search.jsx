import "bootstrap/dist/css/bootstrap.css";
import "../components/product";
import SearchView from "../components/searchView";
import SideBar from "../components/sideBar";
// import MenuSideBar from "../components/MenuSideBar";
import Header from "../components/Header";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const handleSearchChange = (event) => {
    console.log("The search type has been updated: " + event.target.value);
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
          <h1>This is a header</h1>
          <p>This is text under the header</p>
          <form>
            <div className="input-group mb-3">
              <select
                className="btn dropdown-toggle"
                onChange={handleSearchChange}
                style={{
                  backgroundColor: "#B98B73",
                  border: "none",
                  borderRadius: ".25rem 0rem 0rem .25rem",
                }}
              >
                <option value="title">Search by Title</option>
                <option value="author">Search by Author</option>
                <option value="isbn">Search by ISBN</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Sample Search"
              />
            </div>
          </form>

          <div className="row">
            <div className="col-lg-3 col-sm-3">
              <SideBar />
            </div>
            <div className="col">
              <SearchView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
