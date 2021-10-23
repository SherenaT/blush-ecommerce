import "./HeadBandsOnly.css";
import React from "react";
import ItemCards from "../cards/ItemCards";

const HeadBandsOnly = () => {
  return (
    <div className="headBandsOnly">
      <h2>Head Bands Only</h2>
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

export default HeadBandsOnly;
