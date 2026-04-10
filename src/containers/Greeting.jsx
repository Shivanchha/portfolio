import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const { theme } = props;
  const navigate = useNavigate();

  return (
    <Fade direction="up" duration={2000} triggerOnce>
      {/* greet-main 
          max-w-[75%] -> max-w-3/4
          max-w-[900px] -> max-w-225
      */}
      <div className="mx-auto mt-8 block max-w-3/4 px-3 lg:max-w-225 md:max-w-full" id="greeting">
        
        <div className="flex flex-col md:block lg:flex-row">
          
          {/* greeting-text-div */}
          <div className="flex-1 mb-7.5"> {/* 30px / 4 = 7.5 */}
            <div>
              <h1 className="mt-0 text-7.5 font-bold leading-tight text-center md:mt-27.5 md:text-12.5 lg:text-17.5 lg:text-left lg:leading-none font-sans">
                {greeting.title}
              </h1>
              
              <p
                className="mt-4 text-4 leading-normal text-center md:text-5 lg:mr-10 lg:text-7.5 lg:leading-10 lg:text-left font-medium"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>

              <SocialMedia />

              <div className="flex w-full justify-center lg:justify-start">
                <button
                  className="button mt-6 h-12.5 w-50 cursor-pointer rounded border-0 text-4.25 font-bold text-white transition-all duration-200 ease-in-out hover:scale-105"
                  style={{ 
                    backgroundColor: theme.accentBright,
                    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1)` 
                  }}
                  onMouseOver={(e) => e.currentTarget.style.boxShadow = `0 5px 15px ${theme.accentBright}`}
                  onMouseOut={(e) => e.currentTarget.style.boxShadow = "none"}
                  onClick={() => {
                    navigate.push("/contact");
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* greeting-image-div */}
          <div className="flex-1 mb-7.5 *:max-w-full *:h-auto">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}