import React from 'react';

const GetStartedAndContactSection = () => {
  return (
    <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col gap-12 md:gap-16">
        {/* Get Started Section */}
        <div className="text-center">
          <p className="font-light pb-5 pt-5">Get Started</p>
          <div className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            <span className="block">Get in touch with us. We're here to</span>
            <span className="block">
              <span className="text-orange-500">assist</span> you.
            </span>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
          {/* Contact Info Text */}
          <div className="text-center md:text-left md:w-1/3">
            <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Contact Info
            </p>
            <p className="text-2xl sm:text-3xl mt-2">We are always</p>
            <p className="text-2xl sm:text-3xl">
              <span className="text-orange-500 font-bold">happy</span> to assist you
            </p>
          </div>

          {/* Email Section */}
          <div className="space-y-3 text-center md:text-left md:w-1/3">
            <p className="text-xl font-semibold">Email Address</p>
            <div className="border border-gray-400 w-16 mx-auto md:mx-0"></div>
            <span className="block">hamisudantinkiv@gmail.com</span>
            <span className="block">hamisumuhammeddantinki@yahoo.com</span>
            <p className="font-light">Visit any of our branches</p>
            <p className="font-light">or reach us for orders and inquiries.</p>
          </div>

          {/* Phone Section */}
          <div className="space-y-3 text-center md:text-left md:w-1/3">
            <p className="text-xl font-semibold">Number</p>
            <div className="border border-gray-400 w-16 mx-auto md:mx-0"></div>
            <span className="block">+234 907 538 7377</span>
            <span className="block">+234 803 349 5555</span>
            <span className="block">+234 803 733 2201</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedAndContactSection;
