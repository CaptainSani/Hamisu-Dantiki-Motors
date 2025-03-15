import React from "react";
import expertConsultationImage from "../../assets/images/expertConsult.jpeg";

export default function ExpertConsultation() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-4 text-gray-800">
              Expert Consultation & Product Recommendation
            </h2>
            <p className="text-gray-800">
              Not sure which oil is right for your vehicle or machinery? Our team of lubrication experts is always ready
              to provide professional guidance to help you choose the best product.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[350px] rounded-lg overflow-hidden">
          <img
              src={expertConsultationImage}
              alt="Person writing notes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}