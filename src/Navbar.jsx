import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navbar.css'; // Importing the CSS file

const Navbar = () => {
  // Get the cart count from the Redux store
  const cartItemCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Paradise Nursery</Link>
        </li>
        <li className="navbar-item">
          <Link to="/plants" className="navbar-link">Plants</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart" className="navbar-link">
            <i className="fa fa-shopping-cart"></i> Cart
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
