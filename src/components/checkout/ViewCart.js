import "./ViewCart.css";
import React from "react";
import { Link } from "react-router-dom";

const ViewCart = () => {
  return (
    <div className="viewCart">
      <h2 className="cartH2">Cart Summary</h2>
      <div className="formDiv">
        <Link to="/AddressForm" className="formLink">
          <button className="formBtn">Proceed to Check Out</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewCart;
