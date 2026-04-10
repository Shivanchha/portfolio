import React from "react";
import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default function Main({ theme, setTheme }) {
  // Common props to pass to every component
  const passthroughProps = { theme, setTheme };

  return (
    <HashRouter basename="/">
      <Routes>
        {/* Logic: If Splash is enabled, show Splash at root, else show Home */}
        <Route
          path="/"
          element={
            settings.isSplash ? (
              <Splash {...passthroughProps} />
            ) : (
              <Home {...passthroughProps} />
            )
          }
        />
        
        <Route path="/home" element={<Home {...passthroughProps} />} />
        <Route path="/experience" element={<Experience {...passthroughProps} />} />
        <Route path="/education" element={<Education {...passthroughProps} />} />
        <Route path="/contact" element={<Contact {...passthroughProps} />} />
        <Route path="/projects" element={<Projects {...passthroughProps} />} />
        
        {/* Only show /splash route if settings allow it */}
        {settings.isSplash && (
          <Route path="/splash" element={<Splash {...passthroughProps} />} />
        )}

        {/* Catch-all: redirect to home if route doesn't exist */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}