import React, { useEffect } from "react";

const initialValue = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Products_list":
      return { ...state, products: action.productsList };
    default:
  }
};

const Product = () => {
  const [state, dispatch] = useReducer(initialValue, reducer);

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

  return (
    <div>
      <h3>List of Product</h3>
    </div>
  );
};

export default Product;
