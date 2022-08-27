import React, { useEffect, useReducer } from "react";

const initialValue = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Products_list":
      return { ...state, products: action.productsList };
    default:
      console.log("data did not come");
  }
};

const Product = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "Products_list",
            productsList: data,
          });
        });
    };

    return () => fetchData();
  });

  // console.log(state);
  // console.log("hey");

  return (
    <div>
      <h3>List of Product</h3>
    </div>
  );
};

export default Product;
