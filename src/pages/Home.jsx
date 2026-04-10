import React from "react";
import Header from "../components/Header";
import Greeting from "../containers/Greeting";
import Skills from "../containers/skills/Skills";
import Footer from "../components/Footer";

// Use destructuring for cleaner access to props
function Home({ theme, setTheme }) {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <Footer theme={theme} />
    </>
  );
}

export default Home;