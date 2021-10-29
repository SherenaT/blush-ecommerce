import "./ViewCart.css";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const ViewCart = () => {
  const history = useHistory();

  function goBackHandle() {
    history.goBack();
  }

  return (
    <div className="viewCart">
      <i class="angle left icon" onClick={goBackHandle}>
        Back
      </i>
      <h2 className="cartH2">Cart Summary</h2>
      <div className="formDiv">
        <Link to="/AddressForm" className="formLink">
          <button className="formBtn">Proceed to Check Out</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewCart;
