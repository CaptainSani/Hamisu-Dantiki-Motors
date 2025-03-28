import React from 'react';


const ContactSection = () => {
  return (
    <section className="py-10 pl-25">
      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
        {/* Contact Info Text */}
        <div className="md:w-1/3 text-center md:text-left">
          <p className="font-bold text-3xl">Contact Info</p>
          <p className="text-2xl mt-2">We are always</p>
          <p className="text-3xl">
            <span className="text-orange-500 font-bold">happy</span> to assist you
          </p>
        </div>

        {/* Email Section */}
        <div className="space-y-3 md:w-1/3">
          <p className="text-xl font-semibold">Email Address</p>
          <div className="border border-gray-400 w-16"></div>
          <span className="block">hamisudantinkiv@gmail.com</span>
          <span className="block">hamisumuhammeddantinki@yahoo.com</span>
          <p className="font-light">Visit any of our branches</p>
          <p className="font-light">or reach us for orders and inquiries.</p>
        </div>

        {/* Phone Section */}
        <div className="space-y-3 md:w-1/3">
          <p className="text-xl font-semibold">Number</p>
          <div className="border border-gray-400 w-16"></div>
          <span className="block">+234 907 538 7377</span>
          <span className="block">+234 803 349 5555</span>
          <span className="block">+234 803 733 2201</span>
        </div>
      </div>
     
    </section>
  );
};

export default ContactSection;
