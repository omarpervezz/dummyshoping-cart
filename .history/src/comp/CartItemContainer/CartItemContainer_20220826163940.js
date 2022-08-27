import React from "react";

const CartItemContainer = ({ states, dispatch, setSelectedItem }) => {
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
          <div className="user_cart_item_list">{
            states.length > 0 ? <div>
               {states.map((item) => {
                return(
                  <div>
                    <div></div>
                  </div>
                )
               })}

            </div>
          :
          <div>There is nothing here</div>
          }</div>
        </div>
      </div>
    </>
  );
};

export default CartItemContainer;
