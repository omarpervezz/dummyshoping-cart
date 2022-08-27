const initialValue = {
  products: [],
  cartItem: [null],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Products_list":
      return { ...state, products: action.productsList };
      break;
    case ""
  }
};

export { initialValue, reducer };
