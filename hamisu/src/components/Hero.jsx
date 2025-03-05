import React from "react";
import Man from "../assets/images/man1.png";
import Horse from "../assets/images/horse.png";
import Startup from "../assets/images/startup.png";
import Moving from "../assets/images/movingicon.png";
import Support from "../assets/images/supporticon.png";
import Innovate from "../assets/images/innovateicon.png";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-center text-6xl font-bold pt-10">
        <div>
          Unleash Performance with
          <span className="block py-5">
            Our Premium <span className="text-orange-500">Engine Oils</span>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center text-center text-lg font-semi px-4">
        <div>
          <span className="block pt-3">
            Experience the power of superior engine protection withour high
            quality engine oils.
          </span>
          <span className="block pt-3">
            Designed to enhance performance and extend engine life, our products
            are your
          </span>
          <span className="block pt-3">
            trusted choice for optimal vehicle care
          </span>
          <button className="bg-orange-500 text-white text-xl font-semi px-6 py-3 rounded-lg hover:bg-orange-600 transition mt-6 mb-5">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-[#D1CAA1] py-10">
        <div>
          <div className="flex items-center justify-center text-center text-5xl font-medium px-4">
            <div>
              <span className="block pt-3">
                Efficient Engine Oil Distribution
              </span>
              <span className="block pt-3">Services You Can Trust</span>
            </div>
          </div>
          <div className="flex items-center justify-center text-center text-2xl font-light pt-5">
            <div>
              <span className="block">
                Our distribution services are designed to ensure timely delivery
                of high quality engine-oil.
              </span>
              <span className="block">
                We prioritize reliability and efficiency to meet your needs.
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10 py-10">
            <div className="text-center">
              <img
                src={Man}
                alt="man"
                className="w-[450px] h-[300px] object-cover"
              />
              <span className="block text-2xl font-semibold mt-4">
                Why Choose Our
              </span>
              <span className="block text-2xl font-semibold">
                Distribution Services?
              </span>
              <span className="block mt-2">
                We offer a seamless distribution experience tailored
              </span>
              <span className="block">to your requirements.</span>
            </div>

            <div className="text-center">
              <img
                src={Horse}
                alt="horse"
                className="w-[450px] h-[300px] object-cover"
              />
              <span className="block text-2xl font-semibold mt-4">
                Our commitment to
              </span>
              <span className="block text-2xl font-semibold">
                Quality and Efficiency
              </span>
              <span className="block mt-2">
                We ensure that every delivery meets the
              </span>
              <span className="block">highest standards</span>
            </div>

            <div className="text-center">
              <img
                src={Startup}
                alt="satrtup"
                className="w-[450px] h-[300px] object-cover"
              />
              <span className="block text-2xl font-semibold mt-4">
                Get Started With Our
              </span>
              <span className="block text-2xl font-semibold">
                Services Today
              </span>
              <span className="block mt-2">
                Join us for reliable engine oil
              </span>
              <span className="block">distribution solutions</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-5">
          <button className="mt-8 bg-white text-black text-lg font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition ">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-[#412722]">
        <div>
          <div className="pl-25 pt-20">
            <span className="block text-5xl font-bold text-amber-50">
              Unmatched Quality: Engine oils that
            </span>
            <span className="block text-5xl font-bold text-amber-50">
              Exceeds Industry Standards
            </span>
            <span className="block text-5xl font-bold text-amber-50">
              For Performance
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-10 pt-15 pl-5">
          <div>
            <img src={Moving} alt="Movingicon" />
            <span className="block text-2xl font-bold text-amber-50 mt-3">
              Wide Distribution: Ensuring
            </span>
            <span className="block text-2xl font-bold text-amber-50 mb-5">
              Availability Nationwide
            </span>
            <span className="block text-lg font-light text-amber-50">
              Our engine oils are meticulously crafted to deliver
            </span>
            <span className="block text-lg font-light text-amber-50 mb-5">
              superior performance and longevity
            </span>
            <p className="block text-2xl font-light text-amber-50 cursor-pointer underline">
              Learn more
            </p>
          </div>

          <div>
            <img src={Support} alt="support icon" />
            <span className="block text-2xl font-bold text-amber-50 mt-3">
              Dedicated Support:
            </span>
            <span className="block text-2xl font-bold text-amber-50">
              Exceptional Customer Service
            </span>
            <span className="block text-2xl font-bold text-amber-50 mb-5">
              To Meet Your Needs
            </span>
            <span className="block text-lg font-light text-amber-50">
              Our engine oils are meticulously crafted to deliver
            </span>
            <span className="block text-lg font-light text-amber-50 mb-5">
              superior performance and longevity
            </span>
            <p className="block text-2xl font-light text-amber-50 cursor-pointer underline">
              Learn more
            </p>
          </div>

          <div>
            <img src={Innovate} alt="innovate icon" />
            <span className="block text-2xl font-bold text-amber-50 mt-3">
              Innovative Solutions: Advanced
            </span>
            <span className="block text-2xl font-bold text-amber-50">
              Formulations For Optimal Engine
            </span>
            <span className="block text-2xl font-bold text-amber-50 mb-5">
              Performance
            </span>
            <span className="block text-lg font-light text-amber-50">
              Experience the difference with our cutting edge
            </span>
            <span className="block text-lg font-light text-amber-50 mb-5">
              engine oil technology desgined for excellence
            </span>
            <p className="block text-2xl font-light text-amber-50 cursor-pointer underline">
              Learn more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
