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
              <div key={doc.id} className={`${productcss.box_container}`}>
                <div className={`${productcss.title_container}`}>
                  <h3>{doc.title}</h3>
                </div>
                <div className="">
                  <img src={doc.thumbnail} alt="thumbnail" />
                </div>
                <div className="description_container">
                  <article>{doc.description}</article>
                </div>
                <div className="price_container">
                  <div className="current_price">
                    <p>${doc.price}</p>
                  </div>
                  <div className="discount_price">
                    {doc.discountPercentage}%
                  </div>
                </div>
                <div className="stock__rating">
                  <div className="stock">
                    <p>${doc.stock}</p>
                  </div>
                  <div className="ratings">{doc.rating}%</div>
                </div>
                <div className="brandName">
                  <span>{doc.brand}</span>
                </div>
                <div className="category">
                  <span>{doc.category}</span>
                </div>
                <div className="button_container">
                  <button type="button" className="cart_btn">
                    cart item
                  </button>
                  <button type="button" className="remove_cart">
                    remove item
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Product;
