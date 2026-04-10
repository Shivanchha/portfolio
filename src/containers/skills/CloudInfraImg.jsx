import React, { useState } from "react";

// --- The SVG Component ---
const CloudInfraImg = ({ theme }) => {
  return (
    <svg
      id="cloud-infra-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 864.81 658.45"
      aria-labelledby="cloud-title"
    >
      <title id="cloud-title">Cloud Infrastructure Illustration</title>
      <defs>
        <linearGradient id="grad-bg" x1="477.09" y1="779.22" x2="477.09" y2="120.78" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="gray" stopOpacity="0.25" />
          <stop offset="0.54" stopColor="gray" stopOpacity="0.12" />
          <stop offset="1" stopColor="gray" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Background Glow */}
      <path
        d="M506.4,473.94l-.59-.14V451.2a120.23,120.23,0,0,0,89.79-97.09..."
        transform="translate(-167.6 -120.78)"
        fill="url(#grad-bg)"
        opacity="0.7"
      />

      {/* Ground/Shadow */}
      <rect y="625.16" width="645.61" height="21.88" fill={theme.imageDark} />
      <rect x="27.36" y="647.05" width="590.89" height="8.95" fill={theme.imageDark} />

      {/* Main Human Figure Group */}
      <g transform="translate(-167.6 -120.78)">
        {/* Legs / Body */}
        <path d="M593.19,745.08s-116.09.34-116.09.34V585.74A116.09,116.09,0,0,1,593.19,585.74Z" fill={theme.accentColor} />
        <path d="M504.39,473.27S651.23,450.4,620.95,677.54l-17.66,65.11-50.48-2s32.81-75.71,12.62-126.19S504.39,473.27,504.39,473.27Z" fill={theme.accentColor} />
        <path d="M449.8,473.27S303,450.4,333.24,677.54l17.66,65.11,50.48-2s-32.81-75.71-12.62-126.19S449.8,473.27,449.8,473.27Z" fill={theme.accentColor} />
        
        {/* Hair and Head */}
        <path d="M400.44,202.19c22.33-18.23...Z" fill={theme.dark} />
        <path d="M406.75,277.68c6.16,3.73...Z" fill={theme.dark} />
      </g>

      {/* Head and Skin (Relative coords) */}
      <path d="M298.5,290.83h22a16.76,16.76,0,0,1,16.76,16.76v46.33a27.76,27.76,0,0,1-27.76,27.76h0a27.76,27.76,0,0,1-27.76-27.76V307.59A16.76,16.76,0,0,1,298.5,290.83Z" fill={theme.skinColor} />
      <circle cx="309.5" cy="189.88" r="121.14" fill={theme.dark} />
      <circle cx="309.5" cy="217.64" r="116.09" fill={theme.skinColor} />
      <ellipse cx="424.33" cy="217.64" rx="10.1" ry="18.93" fill={theme.skinColor} />
      <ellipse cx="194.67" cy="217.64" rx="10.1" ry="18.93" fill={theme.skinColor} />

      {/* --- Service Cards --- */}

      {/* Heroku Card (Bottom Left) */}
      <rect x="221.42" y="464" width="176" height="156" rx="21.34" fill={theme.imageDark} />
      <g transform="translate(-167.6 -120.78)">
         <path d="M443.45,729.71..." fill="#6762a6" /> {/* Heroku Logo Text */}
         <path d="M487.89,687.82..." fill="#fff" />    {/* Heroku Icon */}
      </g>

      {/* AWS Card (Bottom Right) */}
      <rect x="685.42" y="390" width="176" height="156" rx="21.34" fill={theme.imageDark} />
      <g transform="translate(-167.6 -120.78)">
        <path d="M909.6,577..." fill="#FFFFFF" /> {/* AWS Text */}
        <path d="M999.21,614..." fill="#f90" />    {/* AWS Smile */}
      </g>

      {/* Azure Card (Top Right) */}
      <rect x="576.42" y="118" width="176" height="156" rx="21.34" fill={theme.imageDark} />
      <g transform="translate(-167.6 -120.78)">
        <path d="M807.53,357.41..." fill="#cac9c2" /> 
        <path d="M869.08,261.72..." fill="#5072aa" /> {/* Azure Shapes */}
        <path d="M898.22,312.21..." fill="#cc4232" />
        <path d="M811.55,352.26..." fill="#ecb02a" />
      </g>
    </svg>
  );
};

// --- Main Page Component ---
export default function CloudInfraPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    imageDark: isDarkMode ? "#2d2d2d" : "#e6e6e6",
    accentColor: "#6c63ff",
    skinColor: "#ffb88c",
    dark: "#242424",
    text: isDarkMode ? "#ffffff" : "#333333",
    body: isDarkMode ? "#1a1a1a" : "#f5f5f5",
  };

  const containerStyle = {
    backgroundColor: theme.body,
    color: theme.text,
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Cloud Infrastructure</h1>
        <p style={{ opacity: 0.8, maxWidth: "600px" }}>
          Seamlessly manage your deployments across AWS, Azure, and Heroku with a unified interface.
        </p>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            borderRadius: "30px",
            border: "none",
            backgroundColor: theme.accentColor,
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
          }}
        >
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <div style={{ width: "100%", maxWidth: "900px", padding: "20px" }}>
        <CloudInfraImg theme={theme} />
      </div>

      <footer style={{ marginTop: "40px", opacity: 0.6, fontSize: "0.9rem" }}>
        © 2026 CloudStack Systems. All rights reserved.
      </footer>
    </div>
  );
}