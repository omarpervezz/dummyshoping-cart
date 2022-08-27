import React from "react";

const CartItemContainer = ({ state }) => {
  return (
    <>
      {state && (
        <div className="cart_menu">
         <div></div>
        </div>
      )}
    </>
  );
};

export default CartItemContainer;
