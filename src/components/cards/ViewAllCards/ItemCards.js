import "./ItemCards.css";
import React, { useState, useLocation } from "react";
import { Link } from "react-router-dom";
// import CartQty from "./CartQty";

const ItemCards = (props) => {
  const {
    sku,
    name,
    print,
    color,
    category,
    department,
    size,
    description,
    price,
    image,
  } = props;
  const [hoover, setHoover] = useState(false);
  const location = useLocation();

  // console.log(cart);

  return (
    <div>
      <div
        className="itemSec"
        onMouseEnter={() => {
          setHoover(true);
        }}
        onMouseLeave={() => {
          setHoover(false);
        }}
        // style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}
      >
        <Link
          className="productLink"
          to={{
            pathname: `/item/${department}/${name}`,
            state: {
              sku: sku,
              name: name,
              print: print,
              color: color,
              category: category,
              department: department,
              size: size,
              description: description,
              price: price,
              image: image,
            },
          }}
        >
          <div className="products">
            <div className="itemCards">
              <img className="imgProduct" src={image} alt={name} />
              <h3 className="itemName">{name}</h3>
              <p className="description" style={{ width: "15em" }}>
                {description}
              </p>
              <h5 className="price">
                ${price} test{image}
              </h5>
            </div>
          </div>
        </Link>
        {hoover ? (
          <span>
            <input
              className="mouseOverBtn"
              type="button"
              value="Add to cart"
              onClick={() => {
                props.addToCart();
              }}
            />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default ItemCards;

// display: grid;
//   grid-template-columns: 1fr 1fr;
