import React from "react";

const CartItemContainer = ({ state }) => {
  return (
    <>
      {state && (
        <div className="cart_menu">
          <div className="cart___">
            <hgroup>
              <h4>Cart List</h4>
            </hgroup>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItemContainer;
