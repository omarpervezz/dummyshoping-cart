import axios from "axios";
import React, { useEffect, useReducer } from "react";

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
  const fetchData = await axios.get('https://dummyjson.com/products');
  const [state, dispatch] = useReducer(initialValue, reducer)
  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <h3>List of Product</h3>
    </div>
  );
};

export default Product;
