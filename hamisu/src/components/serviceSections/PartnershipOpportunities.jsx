import React from "react";
import Image from "../../assets/images/handshakeRectangle8.png";

export default function PartnershipOpportunities() {
  return (
    <section className="py-12 md:py-16 bg-[#3d2a25]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '48px',
                lineHeight: '60px',
                letterSpacing: '0%',
              }}
              className="text-white mb-4"
            >
              Partnership opportunities
            </h2>
            <p
              style={{
                width: '710px',
                height: '200px',
                gap: '10px',
                paddingTop: '10px',
                paddingBottom: '10px',
              }}
              className="text-white"
            >
              We welcome business collaborations with auto shops, fleet operators and industrial companies looking for
              reliable engine oil supplies.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={Image}
              alt="Handshake between business partners"
              style={{
                width: '437px',
                height: '575px',
                objectFit: 'cover',
                borderRadius: '32px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
