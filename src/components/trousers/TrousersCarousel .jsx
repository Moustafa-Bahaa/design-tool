import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrousersCarousel.css";

const TrousersCarousel = ({ onSelect }) => {
  const trouserImages = [
    "https://i.pinimg.com/originals/cb/ef/f1/cbeff1d631d8f0df44c8011e4eafdd36.png",
    "https://www.pngall.com/wp-content/uploads/5/Cotton-Pant-PNG-Free-Image.png",
    "https://www.pngall.com/wp-content/uploads/2016/09/Trouser-PNG.png",
    "https://www.pngall.com/wp-content/uploads/2016/09/Trouser-Free-PNG-Image.png",
    "https://www.pngall.com/wp-content/uploads/2016/09/Trouser-Transparent.png",
  ];

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
      <Slider {...settings} className="slider">
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
      </Slider>
    </div>
  );
};

export default TrousersCarousel;
