import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne } from "./Data";
import Generator from "./Generator";

function Home() {
  return (
    <div>
      <HeroSection {...homeObjOne} /> <Generator />
    </div>
  );
}

export default Home;
