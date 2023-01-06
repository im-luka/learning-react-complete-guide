import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h3>Product Detail</h3>
      <p>{params.id}</p>
    </section>
  );
};

export default ProductDetail;
