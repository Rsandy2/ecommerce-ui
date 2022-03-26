import React, { Component } from "react";
import "./product";
import Product from "./product";

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
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-4">
            <Product key={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchView;
