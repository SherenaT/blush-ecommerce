import "./ViewAllProducts.css";
import ItemCards from "../cards/ItemCards";
import MouseOverBtn from "../cards/MouseOverBtn";

import React from "react";

const ViewAllProducts = () => {
  return (
    <div className="viewAllProducts">
      <h2>View All Products</h2>
      <div className="itemsRow">
        <ItemCards />
        <MouseOverBtn />
        <ItemCards />
        <MouseOverBtn />
        <ItemCards />
        <MouseOverBtn />
      </div>
      <div className="itemsRow">
        <ItemCards />
        <ItemCards />
        <ItemCards />
      </div>
      <div className="itemsRow">
        <ItemCards />
        <ItemCards />
        <ItemCards />
      </div>
    </div>
  );
};

export default ViewAllProducts;
