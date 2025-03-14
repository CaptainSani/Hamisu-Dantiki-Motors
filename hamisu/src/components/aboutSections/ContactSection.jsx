import React from "react";
import { Link } from "react-router-dom";

export function ContactSection() {
  return (
    <section className="py-12 md:py-16 bg-[#2A5674] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch with Us</h2>
        <p className="mb-8">Contact us today for more information or to place your order.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact-us"
            className="rounded-md bg-white text-[#2A5674] px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            to="/learn-more"
            className="rounded-md bg-transparent border border-white text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}