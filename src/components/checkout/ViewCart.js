import "./ViewCart.css";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const ViewCart = () => {
  const history = useHistory();

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
  });

  let mapCart = cart.map((product) => {
    return <p>{product.name}</p>;
  });

  return (
    <div className="viewCart">
      <i class="angle left icon" onClick={goBackHandle}>
        Back
      </i>
      <h2 className="cartH2">Cart Summary</h2>
      {mapCart}
      <div className="formDiv">
        <Link to="/AddressForm" className="formLink">
          <button className="formBtn">Proceed to Check Out</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewCart;
