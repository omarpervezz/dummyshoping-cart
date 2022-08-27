const initialValue = {
  products: [],
  cartItem: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Products_list":
      return {
        ...state,
        products: action.productsList,
      };

    case "CART_ITEM":
      return {
        ...state,
        cartItem: [{ ...action.productsList }, ...state.cartItem],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItem: state.cartItem.filter((c) => c.id !== action.productsList.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cartItem: state.cartItem.filter((c) =>
          c.id === action.addItemQ.id ? (c.qty = action.addItemQ.) : c.qty
        ),
      };
    default:
      break;
  }
};

export { initialValue, reducer };
