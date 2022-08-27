const initialValue = {
  products: [],
  cartProducts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Products_list":
      return { ...state, products: action.productsList };
    default:
      break;
  }
};

export { initialValue, reducer };
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