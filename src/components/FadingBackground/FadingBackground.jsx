import React, { useEffect, useState } from "react";
import "./FadingBackground.css";

// How many seconds to wait before changing color
var seconds = 3;

// Insert Colors that will transition
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700"];

const FadingBackground = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    var intervalTime = seconds * 1000;
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fading-background"
      style={{ backgroundColor: colors[currentColorIndex] }}
    >
      <h1>Fadinxg Background Effect</h1>
    </div>
  );
};

export default FadingBackground;
