import React, { useEffect } from "react";

const initialValue = {
  value: null,
};

// const reducer = (state,action) => {
//     switch(action.type){
//       case 'PRODUCTS_LIST':
//         return {...state, ...state.value:action.setData}
//     }
// }

const Product = () => {
  // const [state, dispatch] = useReducer(initialValue, reducer);

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log);
  };

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
