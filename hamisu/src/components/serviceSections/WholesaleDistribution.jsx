import React from 'react';
import Image from '../../assets/images/warehouse8.png';

export default function WholesaleDistribution() {
  return (
    <section className="py-12 md:py-16 bg-[#e9deb4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={Image}
              alt="Warehouse with stacked boxes"
              style={{
                width: '437px',
                height: '575px',
                objectFit: 'cover',
                borderRadius: '32px',
              }}
            />
          </div>
          <div>
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '48px',
                lineHeight: '60px',
                letterSpacing: '0%',
              }}
              className="text-gray-800 mb-4"
            >
              Wholesale & Retail Distribution
            </h2>
            <p
              style={{
                width: '710px',
                height: '200px',
                gap: '10px',
                paddingTop: '10px',
                paddingBottom: '10px',
              }}
              className="text-gray-800"
            >
              We supply engine oils in bulk to dealers, auto workshops, transport companies and industrial clients while
              also catering to individual customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
