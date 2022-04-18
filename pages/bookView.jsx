import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import toast, { Toaster } from "react-hot-toast";
import MenuSideBar from "../components/MenuSideBar";

export default function BookView() {
  const handleAddCart = () => toast.success("Added to Cart!");

  return (
    <div
      className="min-h-screen w-screen"
      style={{ backgroundColor: "#dfbea9" }}
    >
      <MenuSideBar />
      <Toaster />
      <div id="page-wrap">
        <div className="" style={{ backgroundColor: "#B98B73" }}>
          <Header />
          {/* <Banner /> */}
        </div>
        <div
          className="container my-4"
          style={{
            backgroundColor: "#ffe9d5",
            padding: "3rem 3rem 5rem 3rem",
            boxShadow: "0px 2px 5px #B98B73",
          }}
        >
          <div className="row">
            <div className="col-3">
              <img
                className="img-fluid"
                src="https://images-na.ssl-images-amazon.com/images/I/91ocU8970hL.jpg"
              ></img>
            </div>
            <div className="col">
              <h1>Sample Book Title</h1>
              <h5>Author</h5>
              <p>Potato McLastname</p>
              <h5>Genre</h5>
              <p>Science Fiction</p>
              <h5>Publisher</h5>
              <p>Publisher McPublisher</p>
              <h5>ISBN</h5>
              <p>398472398748923743289</p>
              <hr></hr>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident ullam labore natus deleniti laboriosam consectetur
                unde optio itaque obcaecati, perspiciatis nulla at, omnis sit!
                Mollitia non autem magni odio repellat.
              </p>
              <form>
                <input
                  className="form-control"
                  placeholder="Quantity"
                  type="text"
                  style={{
                    width: "110px",
                    marginBottom: "10px",
                  }}
                />
                <button
                  className="btn"
                  type="button"
                  onClick={handleAddCart}
                  style={{
                    width: "110px",
                    backgroundColor: "#fbcc15",
                    boxShadow: "0px 2px 5px lightGray",
                  }}
                >
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
