import React from "react";

import Lady1 from "../../assets/images/Lady1.png";


export function DistributionSection() {
  return (
    <section className="py-12 md:py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">

        <div className="lg:w-1/2 flex justify-center">
            <img
              src={Lady1}
              alt="Map showing branch locations" className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[48px] font-semibold mb-6">Nationwide Distribution</h2>
            <p className="xl:text-[24px]">
              To serve you better, HDM LTD has multiple branches across <span className="font-semibold">Kano, Abuja FCT, Kaduna, Bauchi, Gombe, Yola,
              Katsina,</span> and beyond.
            </p>
            <p className="xl:text-[24px]">
              Our extensive network ensures that our customers always have easy access to quality products, technical
              advice, and exceptional service.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}