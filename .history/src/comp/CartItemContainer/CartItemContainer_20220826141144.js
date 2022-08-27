import React, { useState } from "react";

const CartItemContainer = ({state}) => {
  
  return (
    <>
      {state && (
        <div className="cart_menu">
          <hgroup>
            <h4>Cart List</h4>
          </hgroup>
        </div>
      )}
    </>
  );
};

export default CartItemContainer;
