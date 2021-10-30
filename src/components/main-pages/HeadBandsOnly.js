import React from "react";
import "./ViewAllProducts.css";
import HeadbandsItemCards from "../cards/HeadbandCardsOnly/HeadbandsCardList";

const HeadBandsOnly = () => {
  return (
    <div className="headBandsOnly">
      <h2>Head Bands Only</h2>
      <div className="itemsRow">
        <HeadbandsItemCards />
      </div>
    </div>
  );
};

export default HeadBandsOnly;
