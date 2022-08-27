import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { initialValue, reducer } from "../reducer/reducer";

const Product = () => {
  const [states, dispatch] = useReducer(reducer, initialValue);

  const fetchData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response);
      dispatch({
        action: "Products_list",
        productsList: response.data.products,
      });
    });
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "Products_list",
        productsList: data.products,
      });
    });
};


    return () => fetchData();
  });
  console.log(states);
  return (
    <>
      <div className="grid_container">
        {states.data.products &&
          states.data.products.map((doc) => {
            return (
              <div key={doc.id}>
                <span>{doc.title}</span>
                {doc.images.map((img) => {
                  return <img src={img} alt="text" />;
                })}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Product;
