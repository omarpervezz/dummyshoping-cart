import React from "react";

const CartItemContainer = ({ states, dispatch, setSelectedItem }) => {
  
  console.log(states);
  const handleClick = (e) => {
    if (e.target.classList.contains("cart_menu")) {
      setSelectedItem(null);
    }
  };

  return (
    <>
      <div className="cart_menu" onClick={handleClick}>
        <div className="cart___">
          <hgroup>
            <h4>Cart List</h4>
          </hgroup>
          <div className="user_cart_item_list">
            {}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemContainer;
