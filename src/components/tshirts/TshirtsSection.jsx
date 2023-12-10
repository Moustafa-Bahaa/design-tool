import React from "react";
import TshirtsCarousel from "./TshirtsCarousel";

const TshirtsSection = ({ onSelect }) => {
  return (
    <div>
      <TshirtsCarousel onSelect={onSelect} />
    </div>
  );
};

export default TshirtsSection;
