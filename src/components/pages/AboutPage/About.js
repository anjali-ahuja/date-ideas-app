import React from "react";
import HeroSection from "../../HeroSection";
import { aboutObjOne } from "./AboutData";

function About() {
  return (
    <div>
      <HeroSection {...aboutObjOne} />
    </div>
  );
}

export default About;
