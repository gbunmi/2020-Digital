import React from "react";
import { Works } from "../components/Works";

export default function WorksPage() {
  return (
    <div className="pt-20">
      <Works />
      <div className="bg-[#f3f3f3] p-10 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
        <p className="text-xl max-w-2xl mx-auto">
          A deep dive into our featured projects and case studies.
        </p>
      </div>
    </div>
  );
}
