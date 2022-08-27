import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { initialValue, reducer } from "../reducer/reducer";

const Product = () => {
  const [states, dispatch] = useReducer(reducer, initialValue);

  const fetchData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data);
      dispatch({
        action: "Products_list",
        productsList: response.data.products,
      });
    });
  };

  useEffect(() => {
    fetchData();

    return () => fetchData();
  });
  console.log(states);
  return (
    <>
      <div className="grid_container">
        <h2>hello</h2>
      </div>
    </>
  );
};

export default Product;