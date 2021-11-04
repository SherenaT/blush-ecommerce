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
  }, []);

  const handleNextPage = () => {
    if (cart.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const emptyCart = () => {
    return (
      <div className="cartSummaryDiv">
        <h1 cartSummaryH1>Cart is Empty</h1>
        <Link to="/ViewAllProducts">
          <button className="emptyCartBtn">Lets go shopping!</button>
        </Link>
      </div>
    );
  };

  let mapCart = cart.map((product) => {
    return (
      <div className="cartSummaryRow" style={{ marginTop: "1px" }}>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    );
  });

  let subtotal = () => {
    let sum = 0;
    cart.map((product) => {
      sum = sum + +product.price;
    });
    return <h3>Subtotal: $ {sum}</h3>;
  };

  return (
    <div className="viewCart">
      <i className="angle left icon" onClick={goBackHandle}>
        Back
      </i>
      <h2 className="cartH2">Cart Summary</h2>
      <div
        className="cartSummaryDiv"
        // style={{
        //   border: "2px solid rgb(174, 174, 174)",
        //   margin: "3em 20%",
        //   padding: "2em",
        // }}
      >
        {cart.length > 0 ? mapCart : emptyCart()}
        {cart.length > 0 ? subtotal() : ""}
      </div>

      <div className="cartSummaryDiv">
        {handleNextPage() && (
          <Link to="/AddressForm" className="formLink">
            <button className="formBtn">Proceed to Check Out</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ViewCart;
