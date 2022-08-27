const initialValue = {
  products: [],
  cartItem: [11, 20],
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