import React from "react";
import { socialMediaLinks } from "../portfolio";

import { 
  FaGithub, 
  FaLinkedinIn, 
  FaGoogle, 
  FaTwitter, 
  FaInstagram 
} from "react-icons/fa";

export default function SocialMedia({ theme }) {
  // Mapping the Font Awesome names to React Icons
  const iconMap = {
    github: <FaGithub />,
    linkedin: <FaLinkedinIn />,
    gmail: <FaGoogle />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
  };

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5">
      {Object.keys(socialMediaLinks).map((key) => {
        // Skip link if it's empty or doesn't have an icon
        if (!socialMediaLinks[key] || !iconMap[key]) return null;

        return (
          <a
            key={key}
            href={key === "gmail" ? `mailto:${socialMediaLinks[key]}` : socialMediaLinks[key]}
            className={`flex items-center justify-center w-11 h-11 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-md ${key}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: theme.secondaryText, // or a specific brand color
            }}
          >
            <span className="text-xl">
              {iconMap[key]}
            </span>
          </a>
        );
      })}
    </div>
  );
}