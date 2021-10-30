import "./ReviewOrder.css";
import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const ReviewOrder = () => {
  const history = useHistory();
  const location = useLocation();

  function goBackHandle() {
    history.goBack();
  }

  return (
    <div className="reviewOrder">
      <i class="angle left icon" onClick={goBackHandle}>
        Back
      </i>
      <div className="reviewDiv">
        <h2 className="reviewH2">Order Summary</h2>
        <div className="reviewRow">
          <div className="reviewSec">
            <div className="reviewAddress">
              <h4 className="reviewH4">Address: </h4>
            </div>
            <div className="reviewAddress">
              <p className="reviewP">
                {`${location.state.firstName} ${location.state.lastName}`}
              </p>
              <p className="reviewP">{location.state.company}</p>
              <p className="reviewP">{`(${location.state.phoneNumber[0]}${location.state.phoneNumber[1]}${location.state.phoneNumber[2]})${location.state.phoneNumber[3]}${location.state.phoneNumber[4]}${location.state.phoneNumber[5]}-${location.state.phoneNumber[6]}${location.state.phoneNumber[7]}${location.state.phoneNumber[8]}${location.state.phoneNumber[9]}`}</p>
              <p className="reviewP">
                {`${location.state.address}, #${location.state.address2}`}
              </p>
              <p className="reviewP">
                {`${location.state.city}, ${location.state.state}, 
                ${location.state.zipCode}, ${location.state.country}`}
              </p>
            </div>
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
            <h4 className="reviewH4">Shipping: </h4>
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
