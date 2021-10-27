import "./ViewAllProducts.css";
import ItemCards from "../cards/ItemCards";
import CardList from "../cards/CardList";

import React from "react";

const ViewAllProducts = () => {
  return (
    <div className="viewAllProducts">
      <h2>View All Products</h2>
      <div className="itemsRow">
        <CardList />
      </div>
    </div>
  );
};

export default ViewAllProducts;
