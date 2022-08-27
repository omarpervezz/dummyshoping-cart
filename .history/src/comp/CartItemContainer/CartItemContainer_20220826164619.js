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
            {states.length > 0 ? (
              <div>
                {states.map((item) => {
                  return (
                    <div key={item.id} className="d-flex-row">
                      <div>
                        <img src={item.thum} alt="img" />
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <h4>{item.price}</h4>
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
