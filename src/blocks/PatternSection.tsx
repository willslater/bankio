"use client";

import React from "react";
import { useEffect, useState } from "react";

const PatternSection = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const minBoxWidth = 50;
  const boxCount = Math.floor(screenWidth / minBoxWidth);
  const actualBoxWidth = screenWidth / boxCount;

  return (
    <div className="flex flex-wrap bg-black">
      {Array.from({ length: boxCount * 2 }).map((_, index) => (
        <div
          key={index}
          style={{
            width: `${actualBoxWidth}px`,
            height: `${actualBoxWidth}px`,
          }}
          className={`border-r border-t border-black ${
            Math.random() < 0.5 ? "bg-black" : "bg-white"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default PatternSection;
