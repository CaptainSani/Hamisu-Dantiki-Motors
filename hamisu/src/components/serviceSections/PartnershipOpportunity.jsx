import React from "react";
import partnership from "../../assets/images/partnership.jpeg";

export default function PartnershipOpportunity() {
  return (
    <section className="py-12 md:py-16 bg-[#3d2a25]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-4 text-white">Partnership opportunities</h2>
            <p className="text-white">
              We welcome business collaborations with auto shops, fleet operators and industrial companies looking for
              reliable engine oil supplies.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[350px] rounded-lg overflow-hidden">
            <img
              src={partnership}
              alt="Handshake between business partners"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}