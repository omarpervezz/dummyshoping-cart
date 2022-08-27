import React from "react";

const CartItemContainer = ({ state }) => {
  return (
    <>
      {state && (
        <div className="cart_menu">
          <div className="cart___"></div>
        </div>
      )}
    </>
  );
};

export default CartItemContainer;
