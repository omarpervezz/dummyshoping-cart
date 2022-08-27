import React from "react";
import {motio}
const CartItemContainer = ({ states, dispatch, setSelectedItem }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("cart_menu")) {
      setSelectedItem(null);
    }
  };
  const changeQty = (id, qty) => {
    console.log("you have invocked me");
    dispatch({
      type: "CHANGE_CART_QTY",
      addItemQ: {
        id,
        qty,
      },
    });
  };
  return (
    <>
      <div className="cart_menu" onClick={handleClick}>
        <div className="cart___">
          <hgroup>
            <h4>Cart List</h4>
          </hgroup>
          <div className="user_cart_item_list">
            <h6>Tolat Cart 0</h6>
            {states.length > 0 ? (
              <div>
                {states.map((item) => {
                  return (
                    <div key={item.id} className="d-flex-row cart_box">
                      <div className="d-flex-row">
                        <img src={item.thumbnail} alt="img" />
                        <div className="d-flex-column">
                          <span className="title">{item.title}</span>
                          <span>${item.price}</span>
                        </div>
                      </div>
                      <div className="d-flex-column">
                        <div>
                          <button
                            type="button"
                            onClick={() => changeQty(item.id, item.qty - 1)}
                          >
                            -
                          </button>
                          <span>{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => changeQty(item.id, item.qty + 1)}
                          >
                            +
                          </button>
                        </div>
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
