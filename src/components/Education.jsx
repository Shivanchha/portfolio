import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Certifications from "../../containers/certifications/Certifications";
import { Fade } from "react-awesome-reveal";

export default function Education({ theme }) {
  return (
    <div className="education-main">
      <Header theme={theme} />
      <div className="min-h-screen">
        <Fade bottom duration={2000} distance="40px">
          <Education theme={theme} />
          <Certifications theme={theme} />
        </Fade>
      </div>
      <Footer theme={theme} />
    </div>
  );
}