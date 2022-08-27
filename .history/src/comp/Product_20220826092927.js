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
console.log(sta);
  return (
    <>
      <div className="grid_container">
        {states.products &&
          states.products.map((doc) => {
            return (
              <div key={doc.id}>
                <span>{doc.title}</span>
                <img src={doc.images} alt={doc.images} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Product;
