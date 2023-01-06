import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h2>Products page!</h2>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">PS5</Link>
        </li>
        <li>
          <Link to="/products/p3">Monitor</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
