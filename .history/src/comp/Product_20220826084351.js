import React, { useEffect, useReducer } from "react";

const Product = () => {
  const [state, dispatch] = useReducer({
    
  })
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
