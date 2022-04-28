import Header from "../../components/Header";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
// import MenuSideBar from "../components/MenuSideBar";

export default function BookView({ bookData }) {
  const handleAddCart = () => toast.success("Added to Cart!");
  const card = {
    boxShadow: "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)",
    padding: "2rem",
    margin: "2%",
    backgroundColor: "rgb(255, 255, 255)",
    backgroundClip: " border-box",
    border: "0 solid rgba(0,0,0,.125)",
    borderRadius: ".5rem",
  };
  // console.log(bookData.Vendor[0].username);
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
        <div
          className="container my-4 shadow-md"
          style={{
            backgroundColor: "white",
            padding: "3rem 3rem 5rem 3rem",
            // boxShadow: "0px 2px 5px #B98B73",
            borderRadius: ".25rem",
          }}
        >
          <div className="row">
            <div className="col-3">
              <img
                style={{ borderRadius: ".5rem" }}
                className="img-fluid shadow-md w-100"
                src={`${bookData.image}`}
              ></img>
            </div>
            <div className="col">
              <h1>{bookData.title}</h1>
              <h5>Author</h5>
              <p>{bookData.author}</p>
              <h5>Genre</h5>
              <p>{bookData.genre}</p>
              <h5>Language</h5>
              <p>{bookData.language}</p>
              <h5>Published Date</h5>
              <p>{bookData.publishedDate}</p>
              {/* <h5>Vender</h5>
              <p>{bookData.Vendor[0].username}</p> */}
              <h5>ISBN</h5>
              <p>{bookData.isbn}</p>
              <h5>Price</h5>
              <p>${bookData.price}</p>
              <hr></hr>
              <p>{bookData.description}</p>
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

export async function getServerSideProps(context) {
  const book = context.params.book;
  const bookData = await prisma.book.findUnique({
    where: {
      isbn: book,
    },
    select: {
      title: true,
      isbn: true,
      author: true,
      image: true,
      publishedDate: true,
      genre: true,
      language: true,
      price: true,
      description: true,
      Vendor: true,
    },
  });

  return {
    props: {
      bookData: bookData,
    },
  };
}
