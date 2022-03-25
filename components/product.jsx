import React, { Component } from "react";

const cardStyle = {
  width: "18rem",
};

function Product() {
  return (
    <div>
      <div className="card mb-4">
        <img
          src="https://picsum.photos/100"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div className="card-title">Book Name</div>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            necessitatibus eos at ratione corrupti reiciendis ipsum!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
