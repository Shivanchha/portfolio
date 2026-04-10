import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Header(props) {
  const { theme, setTheme } = props;
  const [currTheme, setCurrTheme] = useState(theme.name);

  const changeTheme = () => {
    const newTheme = currTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setCurrTheme(newTheme);
  };

  const link = settings.isSplash ? "/splash" : "/home";

  // Shared Tailwind classes for NavLinks
  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 rounded transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800 ${
      isActive ? "font-bold" : ""
    }`;

  return (
    // "Fade top" equivalent using Tailwind/standard CSS
    <header className="fixed top-0 w-full z-50 bg-transparent transition-all duration-1000 animate-fadeInDown">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo Section */}
        <NavLink to={link} className="no-underline">
          <span 
            className="text-2xl font-bold font-mono tracking-tighter" 
            style={{ color: theme.text }}
          >
            {greeting.logo_name}
          </span>
        </NavLink>

        {/* Mobile Menu Toggle (Checkbox Hack from original repo) */}
        <input className="hidden peer" type="checkbox" id="menu-btn" />
        <label 
          className="cursor-pointer md:hidden block px-2 py-4 relative select-none" 
          htmlFor="menu-btn"
        >
          <span className="bg-gray-500 block h-0.5 w-5 relative after:content-[''] after:bg-gray-500 after:block after:h-full after:absolute after:w-full after:top-1.5 before:content-[''] before:bg-gray-500 before:block before:h-full before:absolute before:w-full before:-top-1.5"></span>
        </label>

        {/* Navigation Menu */}
        <ul className="list-none flex flex-col md:flex-row items-center m-0 p-0 overflow-hidden max-h-0 peer-checked:max-h-screen md:max-h-full transition-all duration-300 ease-in-out md:static absolute top-16 left-0 w-full md:w-auto bg-white md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent">
          <li>
            <NavLink to="/home" className={navLinkClasses} style={{ color: theme.text }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={navLinkClasses} style={{ color: theme.text }}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={navLinkClasses} style={{ color: theme.text }}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClasses} style={{ color: theme.text }}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClasses} style={{ color: theme.text }}>
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="https://apifi.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 hover:text-blue-500 transition-colors duration-300"
              style={{ color: theme.text }}
            >
              Apifi
            </a>
          </li>

          {/* Theme Toggle Button */}
          <button
            onClick={changeTheme}
            className={`ml-4 p-2 flex items-center justify-center rounded-full transition-all duration-200 outline-none hover:shadow-lg ${
              theme.name === "light" ? "bg-[#7CD1F7] hover:shadow-[#F7D774]" : "bg-[#292C3F] hover:shadow-[#646464]"
            }`}
          >
            {theme.name === "dark" ? (
              <HiMoon size={20} color="#A7A7A7" />
            ) : (
              <CgSun size={20} color="#F9D784" />
            )}
          </button>
        </ul>
      </div>
    </header>
  );
}

export default Header;