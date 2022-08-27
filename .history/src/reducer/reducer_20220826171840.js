const initialValue = {
  products: [],
  cartItem: [],
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Products_list":
      return { ...state, products: action.productsList };
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
