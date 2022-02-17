import React from "react";
import HeroSection from "../../HeroSection";
import {
  aboutObjOne,
  aboutObjTwo,
  aboutObjThree,
  aboutObjFour,
} from "./AboutData";

function About() {
  return (
    <div>
      <HeroSection {...aboutObjOne} />
      <HeroSection {...aboutObjTwo} />
      <HeroSection {...aboutObjThree} />
      <HeroSection {...aboutObjFour} />
    </div>
  );
}

export default About;
