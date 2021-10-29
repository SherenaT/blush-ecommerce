import "./HeadbandsItemCards.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeadbandsItemCards = (props) => {
  const { key, name, price, image, description } = props;
  const [hoover, setHoover] = useState(false);

  return (
    <div
      className="itemSec"
      onMouseEnter={() => {
        setHoover(true);
      }}
      onMouseLeave={() => {
        setHoover(false);
      }}
    >
      <Link className="itemLink" to="/DetailPage">
        <div className="itemCards">
          <img className="imgProduct" src={image} alt="item pic" />
          <h3 className="itemName">{name}</h3>
          <p className="description" style={{ width: "15em" }}>
            Description: {description}
          </p>
          <h5 className="price">${price}</h5>
        </div>
      </Link>
      {hoover ? (
        <span>
          <input className="mouseOverBtn" type="button" value="Add to cart" />
        </span>
      ) : null}
    </div>
  );
};

export default HeadbandsItemCards;
