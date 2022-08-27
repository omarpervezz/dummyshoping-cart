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
          <div className="user_cart_item_list">
            <h6>Tolat Cart )</h6>
            {states.length > 0 ? (
              <div>
                {states.map((item) => {
                  return (
                    <div key={item.id} className="d-flex-row cart_box">
                      <div>
                        <img src={item.thumbnail} alt="img" />
                      </div>
                      <div className="d-flex-column">
                        <span className="title">{item.title}</span>
                        <span>${item.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>cart is empty</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemContainer;
