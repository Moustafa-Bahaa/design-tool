// Home.jsx
import React, { useState } from "react";
import TshirtsSection from "../tshirts/TshirtsSection";
import TrousersSection from "../trousers/TrousersSection";
import DesignsSection from "../designs/DesignsSection";
import "./home.css";
import FabricCanvas from "../FabricCanvas";

const Home = () => {
  const [selectedTshirt, setSelectedTshirt] = useState("");
  const [selectedTrouser, setSelectedTrouser] = useState("");
  const [selectedTshirtDesign, setSelectedTshirtDesign] = useState(null);
  const [selectedTrouserDesign, setSelectedTrouserDesign] = useState(null);
  const [active, setActive] = useState(false);

  const handleSelectTshirt = (url) => {
    setSelectedTshirt(url);
    setActive(true);
  };

  const handleSelectTrouser = (url) => {
    setSelectedTrouser(url);
    setActive(false);
  };

  const handleSelectTshirtDesign = (url) => {
    setSelectedTshirtDesign(url);
  };

  const handleSelectTrouserDesign = (url) => {
    setSelectedTrouserDesign(url);
  };

  return (
    <div className="home-container">
      <div className="home-left">
        <TshirtsSection onSelect={handleSelectTshirt} />
        <TrousersSection onSelect={handleSelectTrouser} />
        <DesignsSection
          onSelect={
            active ? handleSelectTshirtDesign : handleSelectTrouserDesign
          }
        />
      </div>
      <div className="home-right">
        <div className="fabric-container">
          <div onClick={() => setActive(true)}>
            <FabricCanvas
              backgroundImage={selectedTshirt}
              selectedDesign={selectedTshirtDesign}
            />
          </div>
          <div onClick={() => setActive(false)}>
            <FabricCanvas
              backgroundImage={selectedTrouser}
              selectedDesign={selectedTrouserDesign}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
