import React from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Works } from "../components/Works";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Works />
      <Testimonials />
    </>
  );
}
