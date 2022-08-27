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
                <div className={`${productcss.img_container}`}>
                  <img src={doc.thumbnail} alt="thumbnail" />
                </div>
                <div className={`${productcss.description_container}`}>
                  <article>{doc.description}</article>
                </div>
                <div className={`${productcss.price_container}  d-flex-row`}>
                  <div className="current_price">
                    <p>price ${doc.price}</p>
                  </div>
                  <div className="discount_price">
                    <p>discount {doc.discountPercentage}%</p>
                  </div>
                </div>
                <div className={`${productcss.stock__rating} d-flex-row`}>
                  <div className="stock">
                    <p>stock {doc.stock}</p>
                  </div>
                  <div className="ratings">ratings {doc.rating}</div>
                </div>
                <div className={`${productcss.info_brand} d-flex-row`}>
                  <div className="brandName">
                    <span><b></b> {doc.brand}</span>
                  </div>
                  <div className="category">
                    <span>category {doc.category}</span>
                  </div>
                </div>
                <div className={`${productcss.button_container}`}>
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
