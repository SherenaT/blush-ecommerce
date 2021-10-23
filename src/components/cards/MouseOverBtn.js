import React from "react";

const MouseOverBtn = () => {
  const handleMouseOverBtn = () => {
    <button classname="MouseOverBtn">Add to cart</button>;
    console.log("testing mouse over");
  };
  return (
    <div onClick={MouseOverBtn}>
      <br></br>
    </div>
  );
};

export default MouseOverBtn;
