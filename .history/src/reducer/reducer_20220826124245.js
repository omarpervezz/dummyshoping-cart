const initialValue = {
  products: [],
  cartItem: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Products_list":
      return { ...state, products: action.productsList };
      break;
    case "CART_ITEM"
  }
};

export { initialValue, reducer };

