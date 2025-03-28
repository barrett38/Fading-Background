import React, { useEffect, useState } from "react";
import "./FadingBackground.css";

// FIRST: Set the time in seconds for the transition
var seconds = 6;

// SECOND: Insert Colors that will transition
const colors = [
  "#89CFF0", // Baby Blue
  "#ADD8E6", // Light Blue
  "#98FB98", // Pale Green
  "#90EE90", // Light Green
  "#E6E6FA", // Lavender
  "#D8BFD8", // Thistle (Soft Purple)
  "#F4C2C2", // Baby Pink
  "#FFD1DC", // Light Pink
  "#D2B48C", // Tan
  "#A67B5B", // Soft Brown
  "#F5F5DC", // Beige
];

const FadingBackground = () => {
  const intervalTime = seconds * 1000;
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
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
