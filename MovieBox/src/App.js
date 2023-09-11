import React from "react";
import Hero from "./HeroSection/Hero";
import Featured from "./FeaturedSection/Featured";

export default function App() {
  return (
    <>
      <div className="heroSection">
        <Hero />
      </div>
      <div className="featuresSection">
        <Featured />
      </div>
    </>
  )
}
