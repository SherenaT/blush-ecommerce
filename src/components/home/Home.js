import "./Home.css";
import React from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

const Home = () => {
  return (
    <div className="homeDiv">
      <ImageSlider slides={SliderData} />
    </div>
  );
};

export default Home;
