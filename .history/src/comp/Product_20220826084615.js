import React, { useEffect, useReducer } from "react";


const initialValue = {
  value:null
}

const reducer = (state,action) => {
    switch(action.type){
      case 'PRODUCTS_LIST':
        return {...state, state.value:action.}
    }
}


const Product = () => {
  const [state, dispatch] = useReducer(initialValue, reducer)
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log);
  });

  return (
    <div>
      <h3>List of Product</h3>
    </div>
  );
};

export default Product;
