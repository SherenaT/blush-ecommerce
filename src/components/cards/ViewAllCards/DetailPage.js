import "./DetailPage.css";
import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const history = useHistory();
  let [qty, setQty] = useState(1);

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
                src={location.state.image}
                alt="item pic"
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

              <button className="addToCartBtn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
