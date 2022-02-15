import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, dateIdeas } from "./Data";

function Home() {
  return <HeroSection {...homeObjOne} />;
}

export default Home;
