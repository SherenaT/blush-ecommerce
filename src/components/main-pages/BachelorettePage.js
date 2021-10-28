import "./BachelorettePage.css";
import React from "react";
import BacheloretteItemCards from "../cards/BacheloretteCardsOnly/BacheloretteCardList";

const BachelorettePage = () => {
  return (
    <div className="bachelorettePage">
      <h2>Bachelorette Page</h2>
      <div className="itemsRow">
        <BacheloretteItemCards />
      </div>
    </div>
  );
};

export default BachelorettePage;
