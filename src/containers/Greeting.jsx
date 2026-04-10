import React from "react";
import SocialMedia from "../components/SocialMedia";
import { greeting } from "../portfolio";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const { theme } = props;
  const navigate = useNavigate();

  return (
    <Fade direction="up" duration={2000} triggerOnce>
      {/* Container: 
        - Max width restricted for a clean look 
        - flex-col for mobile (stacked)
        - md:flex-row for desktop (side-by-side)
      */}
      <div 
        className="mx-auto flex min-h-[80vh] max-w-[90%] flex-col items-center justify-between px-4 py-10 md:flex-row lg:max-w-300" 
        id="greeting"
      >
        
        {/* Left Side: Text Content */}
        <div className="mb-10 w-full md:mb-0 md:w-1/2">
          <div className="text-center md:text-left">
            <h1 
              className="font-sans text-[40px] font-bold leading-tight md:text-[50px] lg:text-[70px]"
              style={{ color: theme.text }}
            >
              {greeting.title}
            </h1>
            
            <p
              className="mt-4 font-sans text-[18px] font-medium leading-relaxed md:text-[20px] lg:text-[28px]"
              style={{ color: theme.secondaryText }}
            >
              <span>I'm </span>
              <span style={{ color: theme.accentColor }}>
                {greeting.full_name}.{" "}
              </span>
              {greeting.subTitle}
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <SocialMedia theme={theme} />
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <button
                className="h-12.5 w-50 cursor-pointer rounded border-0 text-[17px] font-bold text-white transition-all duration-200 ease-in-out hover:scale-105"
                style={{ 
                  backgroundColor: theme.accentBright,
                }}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 5px 15px ${theme.accentBright}`}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = "none"}
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Animation/SVG */}
        <div className="flex w-full justify-center md:w-1/2">
          <div className="w-full max-w-125 lg:max-w-162.5">
            <FeelingProud theme={theme} />
          </div>
        </div>

      </div>
    </Fade>
  );
}