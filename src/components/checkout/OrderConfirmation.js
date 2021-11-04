import "./OrderConfirmation.css";
import React from "react";
const OrderConfirmation = () => {
  let handleOrderNumber = () => {
    let orderNumber = Math.floor(100000 + Math.random() * 900000);
    return <h3>Order Number: {orderNumber} </h3>;
  };

  return (
    <div className="OrderConfirmationDiv">
      <h1>Order confirmed!</h1>
      {handleOrderNumber()}
      <h3>Thank you for your purchase! See you next time</h3>
    </div>
  );
};

export default OrderConfirmation;
