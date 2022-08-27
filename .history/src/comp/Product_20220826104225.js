import React, { useEffect, useReducer, useState } from "react";
import { initialValue, reducer } from "../reducer/reducer";

const Product = () => {
  const [states, dispatch] = useReducer(reducer, initialValue);
  const [set, setSet] = useState([]);

  useEffect(() => {
    const fetchData = fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "Products_list",
          productsList: data.products,
        });
      });

    return () => fetchData();
  });
  console.log(set);
  return (
    <>
      <div className="grid_container">
        <h2>hello</h2>
      </div>
    </>
  );
};

export default Product;
