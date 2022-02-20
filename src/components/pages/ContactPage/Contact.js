import React from "react";
import HeroSection from "../../HeroSection";
import {
  contactObjFour,
  contactObjOne,
  contactObjThree,
  contactObjTwo,
} from "./ContactData";

function Contact() {
  return (
    <div>
      <HeroSection {...contactObjOne} />
      <HeroSection {...contactObjTwo} /> <HeroSection {...contactObjThree} />
      <HeroSection {...contactObjFour} />
    </div>
  );
}

export default Contact;
