import React from "react";

const CartItemContainer = ({ setSelectedItem }) => {
  const handleClick = (e) => {
   if(e.target.classList.conta)
  };

  return (
    <>
      <div className="cart_menu" onClick={handleClick}>
        <div className="cart___">
          <hgroup>
            <h4>Cart List</h4>
          </hgroup>
        </div>
      </div>
    </>
  );
};

export default CartItemContainer;