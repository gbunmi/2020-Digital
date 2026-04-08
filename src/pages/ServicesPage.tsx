import React from "react";
import { Services } from "../components/Services";

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <div className="bg-[#f3f3f3] p-10 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Detailed breakdown of our research, strategy, and design offerings.
        </p>
      </div>
    </div>
  );
}
