import React from "react";
import TrousersCarousel from "./TrousersCarousel ";

const TrousersSection = ({ onSelect }) => {
  return (
    <div>
      <TrousersCarousel onSelect={onSelect} />
    </div>
  );
};

export default TrousersSection;
