import React from "react";

import Image from "../../assets/images/SsRectangle8.png";


export function HeroSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[48px] font-semibold mb-6">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-[20px] text-gray-700 mb-6">
              At Hamisu Dantinki Motors LTD, our services are designed to meet a
              diverse range of lubrication needs while ensuring exceptional
              quality and timely delivery across Nigeria.
            </p>
            <p className="text-base sm:text-lg md:text-[20px] text-gray-700">
              We offer comprehensive wholesale and retail distribution services,
              supplying engine oils and lubricants in bulk to dealers, auto
              workshops, transport companies, and industrial clients, while also
              catering to individual customers.
            </p>
            <p className="text-base sm:text-lg md:text-[20px] text-gray-700">
              This flexible distribution model ensures that whether you operate
              a large fleet or maintain a personal vehicle, you receive the best
              products available.
            </p>
          </div>
          <div className="md:order-last">
            <img

              src={Image}

              src={building}

              alt="Hamisu Dantinki Motors Building"
              className="rounded-[32px] w-[437px] h-[575px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
