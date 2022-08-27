import React, { useEffect, useReducer } from "react";
import { initialValue, reducer } from "../reducer/reducer";
import classes from "../styles/ProductsCSS/Product.module.css";

const Product = () => {
  const [states, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    const fetchData = () => {
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
  }, [dispatch]);
  return (
    <>
      <div className="grid">
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
