import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrousersCarousel.css";
import trouser1 from "../../images/trouser-1.png";

const TrousersCarousel = ({ onSelect }) => {
  const trouserImages = [trouser1, trouser1, trouser1, trouser1, trouser1];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const handleTrouserClick = (index) => {
    const clickedTrouser = trouserImages[index];
    onSelect(clickedTrouser);
  };

  return (
    <div className="trouser-carousel-container">
      {trouserImages?.map((image, index) => (
        <div
          key={index}
          className="trouser-slide"
          onClick={() => handleTrouserClick(index)}
        >
          <img
            src={image}
            alt={`Trouser ${index + 1}`}
            className="trouser-image"
          />
        </div>
      ))}
    </div>
  );
};

export default TrousersCarousel;
