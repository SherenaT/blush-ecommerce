import "./DetailPage.css";
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const DetailPage = (props) => {
  const location = useLocation();
  const history = useHistory();

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

  let [qty, setQty] = useState(1);
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

  function goBackHandle() {
    history.goBack();
  }

  let handleIncreaseQty = () => {
    if (qty > 0) {
      setQty(qty + 1);
    }
  };
  let handleReduceQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    } else {
      alert("Your quantity can not be less than 0");
    }
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
    <>
      <div className="detailPage">
        <i class="angle left icon" onClick={goBackHandle}>
          Back
        </i>
        <div className="detailDiv">
          <h2>{location.state.name}</h2>
          <div className="detailFlexDiv">
            <div className="detailColumnDiv">
              <img
                className="imgDetail"
                src={`/${location.state.image}`}
                alt="{location.state.name}"
              />
            </div>
            <div className="detailColumnDiv">
              <p>Sku Number: 6563234{location.state.sku}</p>

              <p>Print: {location.state.print}</p>
              <p>Color: {location.state.color}</p>
              <p>Size: {location.state.size}</p>
              <p>Description: {location.state.description}</p>
              <h3>{location.state.price}</h3>
              <div className="quantityDiv">
                <button className="qtyBtn" onClick={handleReduceQty}>
                  -
                </button>
                <h4 style={{ margin: "0px 50px", fontSize: "1.5em" }}>{qty}</h4>
                <button className="qtyBtn" onClick={handleIncreaseQty}>
                  +
                </button>
              </div>

              <button
                className="addToCartBtn"
                onClick={() => {
                  addToCart(product);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
