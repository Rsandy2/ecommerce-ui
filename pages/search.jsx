import "bootstrap/dist/css/bootstrap.css";
import "../components/product";
import Product from "../components/product";
import NavBar from "../components/navBar";
import SearchView from "../components/searchView";
import SideBar from "../components/sideBar";
import FilterItems from "../components/filterItems";

export default function Home() {
  const handleSearchChange = (event) => {
    console.log("The search type has been updated: " + event.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className="container-lg my-4">
        <h1>This is a header</h1>
        <p>This is text under the header</p>
        <form>
          <div className="input-group mb-3">
            <select
              className="btn btn-outline-secondary dropdown-toggle"
              onChange={handleSearchChange}
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
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col">
            <SearchView />
          </div>
        </div>
      </div>
    </div>
  );
}
