import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialValue = {
  value:null
}

const reducer = (state,action) => {
    switch(action.type){
      case 'PRODUCTS_LIST':
        return {...state, ...state.value:action.setData}
    }
}


const Product = () => {
  const fetchData = await axios.get('https://dummyjson.com/products')
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
