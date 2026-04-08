import React from "react";
import { About } from "../components/About";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <div className="bg-[#f3f3f3] p-10 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">About 20/20 Digital</h2>
        <p className="text-xl max-w-2xl mx-auto">
          This is a dedicated page for our agency's story and mission.
        </p>
      </div>
    </div>
  );
}
