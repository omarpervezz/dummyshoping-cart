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
  const [state, dispatch] = useReducer(reducer, initialValue);

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
    return if (state) {
      state.forEach((element) => {
        console.log(element);
      });
    }
  };
  checkF();
  return (
    <>
      <div>
        {/* {state &&
          state.forEach((doc) => {
            console.log(doc);
          })} */}
      </div>
    </>
  );
};

export default Product;
