import React, { useEffect, useReducer } from "react";
import { initialValue, reducer } from "../reducer/reducer";
import productcss from '../styles/ProductsCSS/Product.module.css'
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
      <div className={`${classes.grid_container}`}>
        {states.products &&
          states.products.map((doc) => {
            return (
              <div key={doc.id}>
                <span>{doc.title}</span>
                {doc.images.map((img) => {
                  return <img src={img} alt="text" key={Math.random()} />;
                })}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Product;
