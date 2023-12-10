// DesignsSection.js
import React from "react";
import DesignsCarousel from "./DesignCarousel";

const DesignsSection = ({ onSelect, selectedTshirt, selectedTrouser }) => {
  return (
    <div className="designs-section">
      <DesignsCarousel
        onSelect={onSelect}
        selectedTshirt={selectedTshirt}
        selectedTrouser={selectedTrouser}
      />
    </div>
  );
};

export default DesignsSection;
