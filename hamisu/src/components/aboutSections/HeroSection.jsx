import React from "react";
import building from "../../assets/images/Hamisu-Building.jpeg";

export function HeroSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[48px] font-semibold mb-6">Who We Are?</h1>
          <p className="text-base sm:text-lg md:text-[20px] text-gray-700 mb-6">
              Hamisu Dantinki Motors LTD is Nigeria's leading and most trusted distributor of premium engine oils and
              lubricants. We specialize in supplying high-performance automotive and industrial lubricants that enhance
              engine efficiency, reduce wear, and ensure long-term durability.
            </p>
            <p className="text-base sm:text-lg md:text-[20px] text-gray-700">
            With a strong reputation for quality and reliability, we serve a wide range of customers, including
              retailers, fleet operators, transport companies, auto workshops, and industrial firms.
            </p>
          </div>
          <div className="md:order-last">
            <img
              src={building}
              alt="Hamisu Dantinki Motors Building" className="rounded-[32px] w-[437px] h-[575px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

