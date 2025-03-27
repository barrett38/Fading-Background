import React, { useEffect, useState } from "react";
import "./FadingBackground.css";

const FadingBackground = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
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
