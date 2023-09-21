import React from "react";
import LandingSection from "./LandingSection/LandingSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import AsideSection from "./AsideSection/AsideSection";

export default function App() {
  return (
    <section className="font-custom-font-family text-custom-font-size bg-very-light-grey grid gap-[5em] overflow-hidden">
      <LandingSection />
      <FeatureSection />
      <TestimonialSection />
      <AsideSection />
    </section>
  );
}
