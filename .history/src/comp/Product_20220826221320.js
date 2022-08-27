import { motion } from "framer-motion";
import React, { useEffect, useReducer, useState } from "react";
import { initialValue, reducer } from "../reducer/reducer";
import productcss from "../styles/ProductsCSS/Product.module.css";
import CartItemContainer from "./CartItemContainer/CartItemContainer";

const Product = () => {
  const [states, dispatch] = useReducer(reducer, initialValue);
  const [selectedItem, setSelectedItem] = useState(null);
  const { cartItem, products } = states;

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
  const addItem = (doc) => {
    dispatch({
      type: "CART_ITEM",
      productsList: {
        id: doc.id,
        title: doc.title,
        price: doc.price,
        thumbnail: doc.thumbnail,
        qty: 1,
      },
    });
    setSelectedItem(true);
  };

  const removeItem = (doc) => {
    dispatch({
      type: "REMOVE_ITEM",
      productsList: doc,
    });
    setSelectedItem(null);
  };

  return (
    <>
      <div className={`${productcss.grid_container}`}>
        {states.products &&
          products.map((doc) => {
            return (
              <motion.div
                key={doc.id}
                className={`${productcss.box_container}`}
                whileHover={{ opacity: 1 }}
              >
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
                    <p>
                      <b>price:</b> ${doc.price}
                    </p>
                  </div>
                  <div className="discount_price">
                    <p>
                      <b>discount:</b> {doc.discountPercentage}%
                    </p>
                  </div>
                </div>
                <div className={`${productcss.stock__rating} d-flex-row`}>
                  <div className="stock">
                    <p>
                      <b>stock:</b> {doc.stock}
                    </p>
                  </div>
                  <div className="ratings">
                    <b>ratings:</b> {doc.rating}
                  </div>
                </div>
                <div className={`${productcss.info_brand} d-flex-row`}>
                  <div className="brandName">
                    <span>
                      <b>brand:</b> {doc.brand}
                    </span>
                  </div>
                  <div className="category">
                    <span>
                      <b>category:</b> {doc.category}
                    </span>
                  </div>
                </div>
                <div className={`${productcss.button_container} d-flex-column`}>
                  {states.cartItem.some((p) => p.id === doc.id) ? (
                    <button
                      type="button"
                      className="remove_cart"
                      onClick={() => removeItem(doc)}
                    >
                      remove item
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="cart_btn"
                      onClick={() => addItem(doc)}
                    >
                      cart item
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        {selectedItem && (
          <CartItemContainer
            states={cartItem}
            dispatch={dispatch}
            setSelectedItem={setSelectedItem}
          />
        )}
      </div>
    </>
  );
};

export default Product;