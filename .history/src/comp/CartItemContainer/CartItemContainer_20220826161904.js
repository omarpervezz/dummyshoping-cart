import React from "react";

const CartItemContainer = ({selectedItem, setSelectedItem,  }) => {
  const {cartItem} = selectedItem
  // const handleClick = (e) => {
  //   if (e.target.classList.contains("cart_menu")) {
  //     setSelectedItem(null);
  //   }
  // };

  return (
    <>
      <div className="cart_menu" onClick={null}>
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
