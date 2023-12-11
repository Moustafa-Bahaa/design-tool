import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DesignsCarousel.css";
import design1 from "../../images/1.png";
import design2 from "../../images/2.png";
import design3 from "../../images/3.png";
import design4 from "../../images/4.png";
import design5 from "../../images/5.png";
const DesignsCarousel = ({ onSelect, selectedTshirt, selectedTrouser }) => {
  const [selectedDesign, setSelectedDesign] = useState("");

  const designImages = [design1, design2, design3, design4, design5];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
