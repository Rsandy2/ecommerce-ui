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
        <SideBar />
        <SearchView />
      </div>
    </div>
  );
}
