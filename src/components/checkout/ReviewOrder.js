import "./ReviewOrder.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const ReviewOrder = () => {
  const history = useHistory();
  const location = useLocation();

  function goBackHandle() {
    history.goBack();
  }
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  let mapOrder = cart.map((product) => {
    return (
      <div>
        <>
          {product.name} ...... {product.price}
        </>
      </div>
    );
  });

  let totalQty = () => {
    cart.map((product) => {});
    return cart.length;
  };

  let subtotal = () => {
    let sum = 0;
    cart.map((product) => {
      sum = sum + +product.price;
    });
    return <>${sum}</>;
  };

  let tax = () => {
    let sum = 0;
    cart.map((product) => {
      sum = sum + +product.price;
    });
    tax = (sum * 0.1).toFixed(2);
    return <>${tax}</>;
  };

  let totalPrice = () => {
    let sum = 0;
    cart.map((product) => {
      sum = sum + +product.price;
    });
    let tax = sum * 0.1;
    let total = (+tax + +sum).toFixed(2);
    return <>${total}</>;
  };

  function goBackHandle() {
    history.goBack();
  }

  function handleAddress2() {
    if (!location.state.address2) {
      return "";
    } else {
      return `, # ${location.state.address2}`;
    }
  }
  function handlePhoneNum() {
    if (location.state.phoneNumber.length === 10) {
      return `(${location.state.phoneNumber[0]}${location.state.phoneNumber[1]}${location.state.phoneNumber[2]})${location.state.phoneNumber[3]}${location.state.phoneNumber[4]}${location.state.phoneNumber[5]}-${location.state.phoneNumber[6]}${location.state.phoneNumber[7]}${location.state.phoneNumber[8]}${location.state.phoneNumber[9]}`;
    } else {
      return location.state.phoneNumber;
    }
  }
  //

  return (
    <div className="reviewOrder">
      <i className="angle left icon" onClick={goBackHandle}>
        Back
      </i>
      <div className="reviewDiv">
        <h2 className="reviewH2" style={{ paddingBottom: ".75em" }}>
          Order Summary
        </h2>
        {/* *********** */}
        <div className="reviewRow">
          <h4 className="reviewH4">Address: </h4>

          <p className="reviewP">
            {`${location.state.firstName} ${location.state.lastName}`}
            {location.state.company ? `, ${location.state.company}` : ""}
            <br />
            {`${handlePhoneNum()}`}
            <br />
            {`${location.state.address}${handleAddress2()}`}

            <br />
            {`${location.state.city}, ${location.state.state}, 
                ${location.state.zipCode}, ${location.state.country}`}
          </p>
        </div>
        {/* *********** */}
        <div className="reviewRow">
          <h4 className="reviewH4">Items: </h4>
          <p className="reviewP">{mapOrder}</p>
        </div>
        {/* *********** */}
        <div className="reviewRow">
          <h4 className="reviewH4">Total Quantity: </h4>
          <p className="reviewP">{totalQty()}</p>
        </div>
        {/* *********** */}
        <div className="reviewRow">
          <h4 className="reviewH4">SubTotal: </h4>
          <p className="reviewP">{subtotal()}</p>
        </div>
        {/* *********** */}
        <div className="reviewRow">
          <h4 className="reviewH4">Shipping: </h4>
          <p className="reviewP">$10</p>
        </div>
        {/* *********** */}
        <div className="reviewRow">
          <h4 className="reviewH4">Tax: </h4>
          <p className="reviewP">{tax()}</p>
        </div>
        {/* *********** */}
        <div className="reviewRow">
          <h4 className="reviewH4">Total: </h4>
          <p className="reviewP">{totalPrice()}</p>
        </div>
      </div>

      <div className="reviewBtnDiv">
        <Link to="/OrderConfirmation" className="reviewLink">
          <button className="reviewBtn">Submit Order</button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewOrder;
