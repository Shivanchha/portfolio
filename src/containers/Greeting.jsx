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
      <div className="mx-auto mt-8 block max-w-[75%] px-3 lg:max-w-[900px] md:max-w-full" id="greeting">
        
        <div className="flex flex-col md:block lg:flex-row">
          
          <div className="flex-1 mb-[30px]">
            <div>
              <h1 className="mt-0 text-[30px] font-bold leading-tight text-center md:mt-[110px] md:text-[50px] lg:text-[70px] lg:text-left lg:leading-none font-sans">
                {greeting.title}
              </h1>
              
              <p
                className="mt-4 text-[16px] leading-normal text-center md:text-[20px] lg:mr-10 lg:text-[30px] lg:leading-10 lg:text-left font-medium"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>

              {/* FIXED: Added theme prop here */}
              <SocialMedia theme={theme} />

              <div className="flex w-full justify-center lg:justify-start">
                <button
                  className="button mt-6 h-[50px] w-[200px] cursor-pointer rounded border-0 text-[17px] font-bold text-white transition-all duration-200 ease-in-out hover:scale-105"
                  style={{ 
                    backgroundColor: theme.accentBright,
                    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1)` 
                  }}
                  onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 5px 15px ${theme.accentBright}`}
                  onMouseOut={(e) => e.currentTarget.style.boxShadow = "none"}
                  onClick={() => {
                    navigate("/contact"); // FIXED: useNavigate syntax
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 mb-[30px] *:max-w-full *:h-auto">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}