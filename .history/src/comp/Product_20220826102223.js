import React, { useEffect, useReducer } from "react";
import { initialValue, reducer } from "../reducer/reducer";

const Product = () => {
  const [states, dispatch] = useReducer(reducer, initialValue);



  const fetchData = () 



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
  console.log(states);
  return (
    <>
      <div className="grid_container">
        {states.products &&
          states.products.map((doc) => {
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
