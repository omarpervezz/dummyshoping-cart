const initialValue = {
  products: [],
  cartItem: [],
  quantTy: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Products_list":
      return { ...state, products: action.productsList, quantTy:action.quan };

    case "CART_ITEM":
      return {
        ...state,
        cartItem: [{ ...action.productsListsss }, ...state.cartItem],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (c) => c.id !== action.productsListsss.id
        ),
      };
    default:
      break;
  }
};

export { initialValue, reducer };
