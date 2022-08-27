import React, { useEffect, useReducer } from "react";

const initialValue = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Products_list":
      return { ...state, products: action.productsList };
    default:
      break;
  }
};

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

  const checkF = () => {
    if (states) {
      states.forEach((element) => {
        console.log(element);
      });
    }
  };
  checkF();
  return (
    <>
      <div>
        {states.products &&
          states.products.forEach((doc) => {
            console.log(doc);
          })}
      </div>
    </>
  );
};

export default Product;
