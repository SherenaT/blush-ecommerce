import "./HeadbandsItemCards.css";
import React, { useState } from "react";

// import public from "public/product_images/";

const HeadbandsItemCards = (props) => {
  const { name, price, image, description } = props;
  const [hoover, setHoover] = useState(false);

  return (
    <div
      className="itemSec"
      onMouseEnter={() => {
        console.log("Event:MouseEnter");
        setHoover(true);
      }}
      onMouseLeave={() => {
        console.log("Event:MouseLeave");
        setHoover(false);
      }}
    >
      <div className="itemCards">
        <img className="imgProduct" src={image} alt="item pic" />
        <h3 className="itemName">{name}</h3>
        <p className="description">Description: {description}</p>
        <h5 className="price">${price}</h5>
      </div>
      {hoover ? (
        <span>
          <input className="mouseOverBtn" type="button" value="Add to cart" />
        </span>
      ) : null}
    </div>
  );
};

export default HeadbandsItemCards;
