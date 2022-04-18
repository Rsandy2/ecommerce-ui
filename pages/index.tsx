import type { NextPage } from "next";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import toast, { Toaster } from "react-hot-toast";
import Banner from "../components/Banner";
// import Footer from "../components/Footer";

const notify = () => toast("Here is a toast.");
const Home: NextPage = () => {
  const data = {
    bookTitle: "The Lightning Thief",
    authorName: "Rick Riordan",
    bookCoverUrl: "https://images-na.ssl-images-amazon.com/images/I/91RQ5d-eIqL.jpg",
    altText: "Percy Jackson Book Cover",
    bookPrice: "$15.00"
  };

  const data2 = {
    bookTitle: "City of Bones",
    authorName: "Cassandra Clare",
    bookCoverUrl: "https://images-na.ssl-images-amazon.com/images/I/81GvNdZqETL.jpg",
    altText: "City of Bones Book Cover",
    bookPrice: "$15.00"
  };

  return (
    <div id ="outer-container" className="bg-primary min-h-screen w-screen">
      <Toaster />
      <div id="page-wrap"> 
          <Header />
          <Banner />

        {/* product container */}
        <div className="flex flex-col items-center">
          <h1 className="text-coffee text-3xl m-6">Trending Books</h1>
          <div className="flex justify-center content-evenly space-x-6">
            <ProductCard productData={data} /> 
            <ProductCard productData={data2} /> 
            <ProductCard productData={data} />  
            <ProductCard productData={data2} />

          </div>  
        </div>
        {/* Footer */}
        </div>
          {/* <Footer /> */}
        <div>
      </div>
    </div>
  );
};

export default Home;
