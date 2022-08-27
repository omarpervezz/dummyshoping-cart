import React, { useEffect } from "react";

const Product = () => {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log);
  });

  return (
    <div>
      <h3>List of Product</h3>
    </div>
  );
};

export default Product;
