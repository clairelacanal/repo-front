import React from "react";
import "./Caroussel.css";
import imageSwim from "../../assets/images/swimmers-79592_640.jpg";
import imageFoot from "../../assets/images/photo-foot.jpg";
import imageBasket from "../../assets/images/basketball.jpg";
import imageFencing from "../../assets/images/fencing-1839325_640.jpg";

function Caroussel() {
  return (
    <div className="carousel-container">
      <div className="image-row">
        <img src={imageSwim} alt="image nageurs" />
        <img src={imageFoot} alt="image footballeurs" />
        <img src={imageBasket} alt="image basketteurs" />
        <img src={imageFencing} alt="image escrimeurs" />
      </div>
    </div>
  );
}

export default Caroussel;
