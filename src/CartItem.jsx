import React from 'react';
import './CartItem.css';

const CartItem = ({ cartItems, onRemoveItem, onUpdateQuantity, totalAmount, onContinueShopping }) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <a className="continue-shopping" onClick={onContinueShopping}>Continue Shopping</a>
      </div>

      {/* Check if cart is empty */}
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <h3>Your cart is empty</h3>
        </div>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map(item => (
            <li key={item.name} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="cart-item-controls">
                <button onClick={() => onUpdateQuantity(item, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item, item.quantity + 1)}>+</button>
              </div>
              <div className="cart-item-price">
                ${item.cost.toFixed(2)} {/* Format the price to two decimal places */}
              </div>
              <button onClick={() => onRemoveItem(item)} className='remove_btnn'>Delete</button>
              {/* Added Total button for each plant */}
              <button className="total-item-btn">
                Total: ${(item.cost * item.quantity).toFixed(2)} {/* Show total for the item */}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-footer">
        <div className="total">
          Total: ${totalAmount.toFixed(2)} {/* Display total amount */}
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
