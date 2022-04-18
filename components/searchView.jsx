import React, { Component } from "react";
import "./product";
import ProductCard from "../components/ProductCard";
import Product from "./product";

const data = {
  bookTitle: "The Lightning Thief",
  authorName: "Rick Riordan",
  bookCoverUrl:
    "https://images-na.ssl-images-amazon.com/images/I/91RQ5d-eIqL.jpg",
  altText: "Percy Jackson Book Cover",
  bookPrice: "$15.00",
};

function SearchView() {
  const products = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    // <div className="container">
    //   <div className="row">
    //     {products.map((product) => (
    //       <div className="col-4">
    //         <Product key={product.id} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="container">
      <div className="row gx-1">
        {products.map((product) => (
          <div className="col-md-4">
            <ProductCard productData={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchView;
