import React, { useId, memo } from "react";

const DesignImg = memo(({ theme }) => {
  const id = useId(); // Generates a unique ID for gradients

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1164.07"
      height="555.93"
      viewBox="0 0 1164.07 555.93"
      aria-labelledby="design-tools-title"
      role="img"
    >
      <title id="design-tools-title">Design Tools Illustration</title>
      
      <defs>
        <linearGradient id={`${id}-grad1`} x1="439.31" y1="679.56" x2="439.4" y2="679.56" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="gray" stopOpacity="0.25" />
          <stop offset="1" stopColor="gray" stopOpacity="0.1" />
        </linearGradient>
        {/* Define other gradients using the unique ${id} prefix */}
      </defs>

      {/* Background Shapes */}
      <g opacity="0.1" fill={theme.accentColor}>
        <path d="M1173.17,633.09..." transform="translate(-17.96 -172.03)" />
        <path d="M1159.72,525.81..." transform="translate(-17.96 -172.03)" />
      </g>

      {/* Main Illustration Elements */}
      <g fill={theme.dark}>
         {/* Character/Tool paths go here */}
      </g>

      <g fill={theme.text}>
         {/* Text-related elements go here */}
      </g>
    </svg>
  );
});

export default DesignImg;