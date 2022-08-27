import React, { useEffect } from "react";

const Product = () => {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log);
  });

  return <div>Product</div>;
};

export default Product;
