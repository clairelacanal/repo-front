import "./Caroussel.css";
import imageSwim from "../../assets/images/swimmers-79592_640.jpg";
import imageFoot from "../../assets/images/photo-foot.jpg";
import imageBasket from "../../assets/images/basketball.jpg";
import imageFencing from "../../assets/images/fencing-1839325_640.jpg";

function Caroussel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imageSwim} className="d-block w-50" alt="image nageurs" />
        </div>
        <div className="carousel-item">
          <img
            src={imageFoot}
            className="d-block w-50"
            alt="image footballeurs"
          />
        </div>
        <div className="carousel-item">
          <img
            src={imageBasket}
            className="d-block w-50"
            alt="image basketteurs"
          />
        </div>
        <div className="carousel-item">
          <img
            src={imageFencing}
            className="d-block w-50"
            alt="image escrimeurs"
          />
        </div>
      </div>
    </div>
  );
}

export default Caroussel;
