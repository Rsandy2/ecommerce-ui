import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import NavBar from "../components/navBar";

export default function BookView() {
  return (
    <div>
      <NavBar />
      <div className="container my-4">
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
              Provident ullam labore natus deleniti laboriosam consectetur unde
              optio itaque obcaecati, perspiciatis nulla at, omnis sit! Mollitia
              non autem magni odio repellat.
            </p>
            <form action="">
              <input
                className="form-control mb-2 w-25"
                placeholder="Quantity"
                type="text"
              />
              <button className="btn btn-primary">Add to Cart</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
