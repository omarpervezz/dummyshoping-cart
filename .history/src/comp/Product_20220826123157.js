import React, { useContext, useEffect, useReducer } from "react";
import { initialValue, reducer } from "../reducer/reducer";
import productcss from "../styles/ProductsCSS/Product.module.css";
const ContextProvider = React.createContext();
export const useContentProvider = () => {
  return useContext(ContextProvider);
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

  return (
    <>
      <ContextProvider.Provider value={{ ...states }}>
       
      </ContextProvider.Provider>
    </>
  );
};

export default Product;
