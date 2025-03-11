import React from "react";
import Image from "../assets/images/map-image.jpg";

export function BranchesSection() {
  return (
    <section className="py-12 md:py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Branches</h2>
            <p className="mb-4">
              To serve you better, HDM LTD has multiple branches across Kano, Abuja FCT, Kaduna, Bauchi, Gombe, Yola,
              Katsina, and beyond.
            </p>
            <p className="mb-4">
              Our extensive network ensures that our customers always have easy access to quality products, technical
              advice, and exceptional service.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Map showing branch locations"
              width={500}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}