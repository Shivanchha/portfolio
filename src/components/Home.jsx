import React from "react";
import FeelingProud from "../containers/FeelingProud"; 
import { motion } from "framer-motion"; 

const Home = () => {
  const theme = { accentColor: "#6C63FF", skinColor: "#F7C19B", dark: "#2d2d2d" };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-10">
      {/* Left side: Text */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold text-slate-800 dark:text-white">
          Pushing the boundaries of Web
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          I'm a developer building cool things with React and Tailwind.
        </p>
      </div>

      {/* Right side: The Guy Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <FeelingProud theme={theme} />
      </motion.div>
    </div>
  );
};

export default Home;