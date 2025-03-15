import React from "react";
import nationwideDeliveryImage from "../../assets/images/delivery.jpeg";

export default function NationwideDelivery() {
  return (
    <section className="py-12 md:py-16 bg-[#ff7629]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative h-[300px] md:h-[350px] rounded-lg overflow-hidden">
          <img
              src={nationwideDeliveryImage}
              alt="Worker in warehouse checking inventory"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-4 text-white">Nationwide Distribution</h2>
            <p className="text-white">
              With branches in Abuja, Kaduna, Bauchi, Gombe, Yola, Katsina and beyond we ensure timely delivery of
              engine oils lubricants across Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}