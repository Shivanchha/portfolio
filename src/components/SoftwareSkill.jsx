import React from "react";
import { Icon } from "@iconify/react";

export default function SoftwareSkill({ logos }) {
  return (
    <div className="mt-5">
      <div className="flex flex-wrap justify-center md:justify-start">
        <ul className="flex flex-wrap p-0 list-none m-0">
          {logos.map((logo) => {
            return (
              <li
                key={logo.skillName}
                className="group relative mr-5 mb-5 inline-block text-[3rem]"
                title={logo.skillName} // Simple native tooltip
              >
                {/* Iconify Component */}
                <Icon
                  icon={logo.fontAwesomeClassname}
                  style={logo.style}
                  className="text-[#868e96] transition-all duration-300 hover:text-[#645beb] hover:scale-110"
                />
                
                {/* Custom Tailwind Tooltip (Optional replacement for Bootstrap) */}
                <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {logo.skillName}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}