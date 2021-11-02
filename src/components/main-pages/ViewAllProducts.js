import "./ViewAllProducts.css";
import React from "react";
import { useLocation } from "react-router-dom";
import CardList from "../cards/ViewAllCards/CardList";

console.log("view all products: " + location);
const ViewAllProducts = () => {
  const location = useLocation();

  // console.log(location);
  return (
    <div className="viewAllProducts">
      <h2>View All Products</h2>
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default ViewAllProducts;
