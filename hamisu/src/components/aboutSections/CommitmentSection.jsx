import React from 'react';

export function CommitmentSection() {
  return (
    <section className="py-12 md:py-16 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At Hamisu Dantinki Motors LTD, we understand that high-performance engines require the best lubricants to
            function optimally. That's why we specialize in distributing superior engine oils, ensuring maximum engine
            protection, fuel efficiency, and longevity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Team member helping customer"
              width={400}
              height={300}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Team members in discussion"
              width={400}
              height={300}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Professional in business attire"
              width={400}
              height={300}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

