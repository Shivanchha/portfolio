import React, { useState } from "react";

// --- The SVG Component ---
const DataScienceImg = ({ theme }) => {
  return (
    <svg
      id="data-science-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1120 829.80067"
      aria-labelledby="ds-title"
    >
      <title id="ds-title">Data Science Illustration</title>
      
      {/* Background Shadow/Floor */}
      <ellipse
        cx="975.57906"
        cy="811.05902"
        rx="144.42094"
        ry="18.74165"
        fill={theme.imageDark}
      />

      {/* --- Top Left Window (Pie Chart) --- */}
      <rect y="27.5" width="436" height="272" fill={theme.imageDark} />
      <rect x="27.5" y="1" width="436" height="272" fill="none" stroke="#3F3D56" strokeMiterlimit="10" strokeWidth="2" />
      
      <g transform="translate(-40 -34.59967)">
        <path d="M352.468,237.56768A94,94,0,0,0,286,77.09967v94Z" fill={theme.text} />
        <path d="M286,77.09967a94.01123,94.01123,0,0,0-44.968,176.56414L286,171.09967Z" fill={theme.accentColor} />
        <path d="M352.468,237.56768,286,171.09967l-44.968,82.56414a94.04908,94.04908,0,0,0,111.436-16.09613Z" fill="#FE9800" />
      </g>

      <rect x="44" y="216.5" width="18" height="18" fill={theme.accentColor} />
      <rect x="70" y="216.5" width="18" height="18" fill={theme.text} />
      <rect x="96" y="216.5" width="18" height="18" fill="#FE9800" />
      <rect x="355" y="220.5" width="74" height="3" fill={theme.text} />
      <rect x="355" y="229.5" width="74" height="3" fill={theme.text} />
      <rect x="355" y="238.5" width="74" height="3" fill={theme.text} />

      {/* --- Bottom Left Window (Donut Chart) --- */}
      <rect x="137" y="406.5" width="248" height="272" fill={theme.imageDark} />
      <rect x="162" y="380.5" width="248" height="272" fill="none" stroke="#3F3D56" strokeMiterlimit="10" strokeWidth="2" />
      
      <g transform="translate(-40 -34.59967)">
        <path d="M326,463.09967v22a66,66,0,0,1,46.66907,112.66906l15.55633,15.55634A88,88,0,0,0,326,463.09967Z" fill={theme.text} />
        <path d="M388.2254,613.32507l-15.55633-15.55634a65.98344,65.98344,0,0,1-86.6,5.87165L272.7533,621.16113a87.99775,87.99775,0,0,0,115.4721-7.83606Z" fill="#FE9800" />
        <path d="M260,551.09967a66,66,0,0,1,66-66v-22a87.99914,87.99914,0,0,0-53.2467,158.06146l13.31579-17.52075A65.885,65.885,0,0,1,260,551.09967Z" fill={theme.accentColor} />
      </g>

      {/* --- Center Window (Bar Chart) --- */}
      <rect x="507" y="236.5" width="248" height="272" fill={theme.imageDark} />
      <rect x="532" y="210.5" width="248" height="272" fill="none" stroke="#3F3D56" strokeMiterlimit="10" strokeWidth="2" />
      <polyline points="556 227.5 556 435.5 757 435.5" fill="none" stroke="#3F3D56" strokeMiterlimit="10" strokeWidth="2" />
      <rect x="567" y="362.5" width="45" height="72" fill="#FE9800" />
      <rect x="632" y="313.5" width="45" height="121" fill={theme.text} />
      <rect x="697" y="256.5" width="45" height="178" fill={theme.accentColor} />

      {/* --- Human Figure Paths --- */}
      <circle cx="904.51974" cy="136.03869" r="36.13958" fill={theme.skinColor} />
      
      <g transform="translate(-40 -34.59967)">
        <path d="M971.62443,175.593s-4.08028,30.31061,6.41186,33.808,7.57765,30.31062,7.57765,30.31062l-31.47641,23.89875-27.979,2.33159-6.99476-36.13958L923.244,220.476s15.73821-18.65268,4.66318-37.88826S971.62443,175.593,971.62443,175.593Z" fill={theme.skinColor} />
        <path d="M942.47961,411.666,905.75713,497.9347s-28.56192-16.3211-45.46592-14.57241-37.88827-18.65268-37.88827-18.65268l20.98427-101.424,39.05406-107.83584,54.20937,34.39089Z" fill={theme.accentColor} opacity="0.1" />
        <path d="M1005.43242,403.50548l34.39089,81.02261...Z" fill={theme.imageClothes} />
        {/* ... Other complex body paths follow ... */}
        <path d="M947.77766,143.93681c-4.89044-1.13-9.96711.1222-14.92033.93394..." fill={theme.dark} />
      </g>
    </svg>
  );
};

// --- Main Page Component ---
export default function DataSciencePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Example Theme Objects
  const theme = {
    imageDark: isDarkMode ? "#2d2d2d" : "#e6e6e6",
    imageClothes: isDarkMode ? "#5e5c7f" : "#3f3d56",
    accentColor: "#6c63ff", // Often used in these illustrations
    skinColor: "#ffb88c",
    text: isDarkMode ? "#ffffff" : "#333333",
    dark: "#242424",
    body: isDarkMode ? "#121212" : "#ffffff",
  };

  const pageStyle = {
    backgroundColor: theme.body,
    color: theme.text,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    transition: "all 0.3s ease",
    padding: "20px"
  };

  return (
    <div style={pageStyle}>
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1>Data Science Analytics</h1>
        <p>Interpreting complex data into actionable insights.</p>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: theme.accentColor,
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <main style={{ width: "100%", maxWidth: "800px" }}>
        <DataScienceImg theme={theme} />
      </main>
    </div>
  );
}