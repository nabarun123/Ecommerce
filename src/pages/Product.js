import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Product() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="text-center display-6 my-5">
          All Products Listed Here
        </div>
        <Link to="/cart">
          <button className="btn btn-success">Add to cart</button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
