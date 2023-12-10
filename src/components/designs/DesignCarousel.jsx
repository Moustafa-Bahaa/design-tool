import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DesignsCarousel.css";

const DesignsCarousel = ({ onSelect, selectedTshirt, selectedTrouser }) => {
  const [selectedDesign, setSelectedDesign] = useState("");

  const designImages = [
    "https://www.pngall.com/wp-content/uploads/15/Milwaukee-Bucks-Logo-Transparent.png",
    "https://www.pngall.com/wp-content/uploads/15/Comcast-Logo-PNG-Images.png",
    "https://www.pngall.com/wp-content/uploads/15/Disney-Cars-PNG.png",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleDesignClick = (index) => {
    const clickedDesign = designImages[index];
    setSelectedDesign(clickedDesign);
    onSelect(clickedDesign);
  };

  return (
    <div className="designs-carousel-container">
      <Slider {...settings} className="slider">
        {designImages.map((image, index) => (
          <div
            key={index}
            className={`design-slide ${
              (selectedTshirt && selectedTshirt === image) ||
              (selectedTrouser && selectedTrouser === image)
                ? "selected"
                : ""
            }`}
            onClick={() => handleDesignClick(index)}
          >
            <img
              src={image}
              alt={`Design ${index + 1}`}
              className="design-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DesignsCarousel;
