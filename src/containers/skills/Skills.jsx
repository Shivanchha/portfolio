import React from "react";
import SoftwareSkill from "../../components/SoftwareSkill";
import { skills } from "../../portfolio";
import DataScienceImg from "./DataScience";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";

function GetSkillSvg({ fileName, theme }) {
  const images = {
    DataScienceImg: <DataScienceImg theme={theme} />,
    FullStackImg: <FullStackImg theme={theme} />,
    CloudInfraImg: <CloudInfraImg theme={theme} />,
  };
  // We check if the fileName exists in our object, otherwise we show FullStackImg
  return images[fileName] || <FullStackImg theme={theme} />;
}

export default function Skills({ theme }) {
  // Safety check: If theme or skills data is missing, don't crash the app
  if (!theme || !skills || !skills.data) {
    return null; 
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10" id="skills">
      <div className="text-center mb-12 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold" style={{ color: theme.text }}>
          Here's what I do
        </h1>
      </div>

      {/* Added ?. safety navigation to the map */}
      {skills.data.map((skill, index) => (
        <div 
          key={skill.title} 
          className={`flex flex-col md:flex-row items-center justify-between mb-20 gap-10 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 flex justify-center animate-fadeInLeft">
            <div className="w-full max-w-md">
              <GetSkillSvg fileName={skill.fileName} theme={theme} />
            </div>
          </div>

          <div className="w-full md:w-1/2 animate-fadeInRight">
            <h1 className="text-3xl font-bold mb-4" style={{ color: theme.text }}>
              {skill.title}
            </h1>
            
            <SoftwareSkill logos={skill.softwareSkills} />
            
            <div className="mt-6 space-y-2">
              {/* Added ?. to the inner map as well */}
              {skill.skills?.map((sentence, i) => (
                <p
                  key={i}
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ color: theme.secondaryText }}
                >
                  {sentence}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}