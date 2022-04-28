import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

export default function Home({ searchResults, genreList }) {
  //   const handleSearchChange = (event) => {
  //     console.log("The search type has been updated: " + event.target.value);
  //   };

  const router = useRouter();
  const { search } = router.query;
  if (searchResults.length <= 0) {
    console.log("No search results");
    useEffect(() => {
      router.push("/search");
    });
  }
  //   toast((t) => <span>search: {search}</span>);

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
          <h1>Search: {search}</h1>
          <div className="row">
            <div className="col-lg-3 col-sm-3">
              <nav
                id="navbar-example3"
                className="shadow-md navbar navbar-light flex-column align-items-stretch p-3"
                style={{
                  borderRadius: ".5rem",
                  background: "#FFFFFF",
                  marginTop: "1rem",
                }}
              >
                <h3>Filters</h3>
                <hr></hr>
                <h5>Genre</h5>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Action
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Comedy
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Sci-Fi
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Romance
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Mystery
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Phil
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Generic
                  </label>
                </div>
              </nav>
            </div>
            <div className="col">
              <div className="container">
                <div className="row gx-1">
                  {searchResults.map((product) => (
                    <div className="col-md-4">
                      <ProductCard productData={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const search = context.params.search;
  const searchResults = await prisma.book.findMany({
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          isbn: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          author: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  const genreList = await prisma.book.findMany({
    distinct: ["genre"],
    select: {
      genre: true,
    },
  });

  return {
    props: {
      searchResults: searchResults,
      genreList: genreList,
    },
  };
}
