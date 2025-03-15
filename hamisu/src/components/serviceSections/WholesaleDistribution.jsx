import React from "react";
import wholesaleDistributionImage from "../../assets/images/warehouse.jpeg";

export default function WholesaleDistribution() {
  return (
    <section className="py-12 md:py-16 bg-[#e9deb4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative overflow-hidden">
            <img
              src={wholesaleDistributionImage}
              alt="Warehouse with stacked boxes"
              className="w-[437px] h-[575px] rounded-[32px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl xl:text-[48px] font-semibold tracking-tight mb-4 text-gray-800">
              Wholesale & Retail Distribution
            </h2>
            <p className="text-base md:text-lg xl:text-[24px] text-gray-800">
              We supply engine oils in bulk to dealers, auto workshops,
              transport companies, and industrial clients while also catering to
              individual customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}