import "bootstrap/dist/css/bootstrap.css";
import "../components/product";
import Product from "../components/product";
import NavBar from "../components/navBar";
import SearchView from "../components/searchView";
import SideBar from "../components/sideBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="container my-4">
        <h1>This is a header</h1>
        <p>This is text under the header</p>
        <form>
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Search by Title
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Search by Author
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Search by ISBN
                </a>
              </li>
            </ul>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
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
