import "./ItemCards.css";
import React from "react";

const ItemCards = () => {
  return (
    <div className="itemCards">
      <img className="imgProduct" src="../headband.png" alt="headband" />
      <h3 className="itemName">Item Name</h3>
      <p className="description">
        Description: Description, Description, Description, Description,
        Description, Description, Description{" "}
      </p>
      <h5 className="price">$12.00</h5>
    </div>
  );
};

export default ItemCards;
