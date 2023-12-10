import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TshirtsCarousel.css";

const TshirtsCarousel = ({ onSelect }) => {
  const tshirtImages = [
    "https://i.pinimg.com/originals/cb/ef/f1/cbeff1d631d8f0df44c8011e4eafdd36.png",
    "https://www.pngall.com/wp-content/uploads/14/Hoodie-PNG-Cutout.png",
    "https://www.pngall.com/wp-content/uploads/14/Hoodie-PNG-Image-HD.png",
    "https://www.pngall.com/wp-content/uploads/14/Hoodie-PNG-Pic.png",
    "https://www.pngall.com/wp-content/uploads/14/Hoodie-No-Background.png",
    "https://www.pngall.com/wp-content/uploads/14/Hoodie-PNG-HD-Image.png",
  ];

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
      <Slider {...settings} className="slider">
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
      </Slider>
    </div>
  );
};

export default TshirtsCarousel;
