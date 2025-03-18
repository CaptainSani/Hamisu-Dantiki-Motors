import React from "react";
import Total from "../../assets/images/totallogo.png";
import customer from "../../assets/images/lovely-customer.jpeg";

export function TestimonialSection() {
  return (
    <section className="py-12 md:py-16 bg-[#3D2A20] text-white">
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          <div>
            <img
              src={customer}
              alt="Excited customer testimonial"
              className="rounded-[32px] w-[561px] h-[575px] object-cover mb-8 md:mb-0"
            />
          </div>
          <div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-[48px] h-[48px] text-yellow-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="xl:text-[24px] italic mb-4">
              "The engine oil from this company has significantly improved my
              vehicle's performance. I highly recommend their products to anyone
              looking for quality and reliability."
            </p>
            <div className="flex items-center gap-4">
              <p className="xl:text-[24px]">
                John Doe
                <br />
                Mechanic, Auto Shop
              </p>
              <img
                src={Total}
                alt="Total Logo"
                className="h-[127px] w-[205px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}