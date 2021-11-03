import "./ItemCards.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  let [cart, setCart] = useState([]);

  let localCart = localStorage.getItem("cart");

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  let addToCart = (product) => {
    let cartCopy = [...cart];
    cartCopy.push(product);
    setCart(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
    window.location.reload();
  };

  let product = {
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
  };

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
              <h3 className="itemName">{name}</h3>
              <img className="imgProduct" src={image} alt={name} />
              <p className="description" style={{ width: "15em" }}>
                {description}
              </p>
              <h5 className="price">${price}</h5>
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
                addToCart(product);
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
