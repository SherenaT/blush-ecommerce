import "./BachelorettePage.css";
import React from "react";
import ItemCards from "../cards/ItemCards";

const BachelorettePage = () => {
  return (
    <div className="bachelorettePage">
      <h2>Bachelorette Page</h2>
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
      <div className="itemsRow">
        <ItemCards />
        <ItemCards />
        <ItemCards />
      </div>
    </div>
  );
};

export default BachelorettePage;
