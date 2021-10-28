import "./ReviewOrder.css";
import React from "react";
import { Link } from "react-router-dom";

const ReviewOrder = () => {
  return (
    <div className="reviewOrder">
      <div className="reviewDiv">
        <h2 className="reviewH2">Order Summary</h2>
        <div className="reviewRow">
          <div className="reviewSec">
            <h4 className="reviewH4">Address: </h4>
            <p className="reviewP">address value</p>
          </div>
        </div>
        <div className="reviewRow">
          <div className="reviewSec">
            <p>merchandise pic</p>
            <div className="reviewCol">
              <p className="reviewP">merchandise name</p>
              <p className="reviewP">merchandise quantity</p>
              <p className="reviewP">merchandise price</p>
            </div>
          </div>
        </div>
        <div className="reviewRow">
          <div className="reviewSec">
            <h4 className="reviewH4">Subtotal:</h4>
            <p className="reviewP">Subtotal</p>
          </div>
          <div className="reviewSec">
            <h4 className="reviewH4">Shipping</h4>
            <p className="reviewP">Shipping Value</p>
          </div>{" "}
          <div className="reviewSec">
            <h4 className="reviewH4">Taxes:</h4>
            <p className="reviewP">Taxes Value</p>
          </div>{" "}
          <div className="reviewSec">
            <h4 className="reviewH4">Total:</h4>
            <p className="reviewP">Total Value</p>
          </div>
        </div>
      </div>
      <div className="reviewBtnDiv">
        <Link to="/ReviewOrder" className="reviewLink">
          <button className="reviewBtn">Submit Order</button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewOrder;
