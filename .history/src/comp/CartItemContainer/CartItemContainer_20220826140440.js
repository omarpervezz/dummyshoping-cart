import React, { useState } from "react";

const CartItemContainer = () => {
  const [state, setState] = useState(null)
  return (
    <div className="cart_menu">
      <hgroup>
        <h4>Cart List</h4>
      </hgroup>
    </div>
  );
};

export default CartItemContainer;
