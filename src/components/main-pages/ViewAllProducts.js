import "./ViewAllProducts.css";
import React from "react";
import CardList from "../cards/ViewAllCards/CardList";

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
