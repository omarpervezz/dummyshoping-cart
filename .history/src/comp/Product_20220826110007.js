import React, { useEffect, useReducer } from "react";
import { initialValue, reducer } from "../reducer/reducer";
import productcss from "../styles/ProductsCSS/Product.module.css";
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
      <div className={`${productcss.grid_container}`}>
        {states.products &&
          states.products.map((doc) => {
            return (
              <div key={doc.id}>
                <div className="title_container">
                  <h3>{doc.title}</h3>
                </div>
                <div className="img_container">
                  <img src={doc.images[0]} alt="products" />
                </div>
                <div className="description_container">
                  <article>{doc.description}</article>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Product;
