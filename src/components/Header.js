import "./header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [cart, setCart] = useState([]);

  let localCart = localStorage.getItem("cart");

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart && localCart.length !== cart.length) {
      setCart(localCart);
    }
  }, []);

  // useEffect(() => {
  //   localCart = JSON.parse(localCart);
  //   if (localCart) {
  //     setCart(localCart);
  //   }
  // });

  return (
    <div className="header">
      <Link to="/" className="linkH1">
        <h1>Blush</h1>
      </Link>
      <div className="nav">
        <ul className="navlinks">
          <Link to="/">
            <li className="liNav">Home</li>
          </Link>
          <Link to="/ViewAllProducts">
            <li className="liNav">View All Prodcts</li>
          </Link>
          <Link to="/HeadBandsOnly">
            <li className="liNav">Head Bands</li>
          </Link>
          <Link to="/BachelorettePage">
            <li className="liNav">Bachelorette Goodies</li>
          </Link>
        </ul>
        <div id="iconsHeader">
          <Link to="/ViewCart" style={{ color: "black" }}>
            {cart.length > 0 ? cart.length : ""}
            <i className="large shopping cart icon"></i>
          </Link>
          <i className="large search icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
