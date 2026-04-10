import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
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

  // Common NavLink styles
  const navLinkBase = "block px-5 py-2.5 no-underline transition-all duration-200 ease-in-out rounded-md my-0.5 mx-1 lg:my-0 lg:mx-1.25";
  
  const icon = theme.name === "dark" ? (
    <HiMoon size={20} color={theme.name === "light" ? "#F9D784" : "#A7A7A7"} />
  ) : (
    <CgSun size={20} color={theme.name === "light" ? "#F9D784" : "#A7A7A7"} />
  );

  return (
    <Fade top duration={1000} distance="20px">
      <header className="sticky top-0 z-50 bg-transparent px-2.5 py-5 mx-auto -mt-2.5 block max-w-19/20 md:flex md:items-center md:justify-between">
        {/* Logo */}
        <NavLink to={link} className="block float-left text-6 leading-normal no-underline mt-3 md:mt-0 md:text-5">
          <span className="font-sans font-bold px-2.5 tracking-widest" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
        </NavLink>

        {/* Mobile Menu Toggle */}
        <input className="hidden peer" type="checkbox" id="menu-btn" />
        <label className="cursor-pointer inline-block float-right p-7 relative select-none md:hidden" htmlFor="menu-btn">
          <span className="bg-[#fb1056] block h-0.5 relative transition-all duration-200 w-4.5 peer-checked:bg-transparent 
            before:content-[''] before:bg-[#fb1056] before:block before:h-full before:absolute before:transition-all before:duration-200 before:w-full before:top-1.25
            after:content-[''] after:bg-[#fb1056] after:block after:h-full after:absolute after:after:transition-all after:duration-200 after:w-full after:top-1.25
            peer-checked:before:rotate-45 peer-checked:before:top-0 peer-checked:after:rotate-45 peer-checked:after:top-0">
          </span>
        </label>

        {/* Navigation Menu */}
        <ul className="m-0 p-2.5 list-none overflow-hidden clear-both max-h-0 transition-all duration-200 ease-out font-sans peer-checked:max-h-92.5 md:max-h-none md:flex md:items-center">
          <li>
            <NavLink to="/home" className={`${navLinkBase} hover:bg-[#2ab0ee] hover:shadow-[0_2px_10px_#2ab0ee] hover:text-white!`} 
              activeStyle={{ fontWeight: "bold" }} style={{ color: theme.text }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={`${navLinkBase} hover:bg-[#eb6559] hover:shadow-[0_2px_10px_#eb6559] hover:text-white!`} 
              activeStyle={{ fontWeight: "bold" }} style={{ color: theme.text }}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={`${navLinkBase} hover:bg-[#f7b908] hover:shadow-[0_2px_10px_#f7b908] hover:text-white!`} 
              activeStyle={{ fontWeight: "bold" }} style={{ color: theme.text }}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={`${navLinkBase} hover:bg-[#e44160] hover:shadow-[0_2px_10px_#e44160] hover:text-white!`} 
              activeStyle={{ fontWeight: "bold" }} style={{ color: theme.text }}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={`${navLinkBase} hover:bg-[#47a148] hover:shadow-[0_1px_10px_#47a148] hover:text-white!`} 
              activeStyle={{ fontWeight: "bold" }} style={{ color: theme.text }}>
              Contact
            </NavLink>
          </li>

          {/* Theme Toggle Button */}
          <button 
            onClick={changeTheme}
            className="cursor-pointer h-11.25 w-11.25 mr-1.25 ml-3.75 pt-1.25 rounded-full border-none flex items-center justify-center outline-none transition-all duration-200 ease-in-out hover:shadow-lg"
            style={{ 
              backgroundColor: theme.name === "light" ? "#7CD1F7" : "#292C3F",
            }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 3px 8px ${theme.name === "light" ? "#F7D774" : "#646464"}`}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = "none"}
          >
            {icon}
          </button>
        </ul>
      </header>
    </Fade>
  );
}

export default Header;