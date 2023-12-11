import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TshirtsCarousel.css";
import tshirt1 from "../../images/11.png";
import tshirt2 from "../../images/12.png";
import tshirt3 from "../../images/13.png";
import tshirt4 from "../../images/14.png";
import tshirt5 from "../../images/15.png";

const TshirtsCarousel = ({ onSelect }) => {
  const tshirtImages = [tshirt1, tshirt2, tshirt3, tshirt4, tshirt5];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const handleTshirtClick = (index) => {
    const clickedTshirt = tshirtImages[index];
    onSelect(clickedTshirt);
  };

  return (
    <div className="tshirt-carousel-container">
      {tshirtImages.map((image, index) => (
        <div
          key={index}
          className="tshirt-slide"
          onClick={() => handleTshirtClick(index)}
        >
          <img
            src={image}
            alt={`T-shirt ${index + 1}`}
            className="tshirt-image"
          />
        </div>
      ))}
    </div>
  );
};

export default TshirtsCarousel;
