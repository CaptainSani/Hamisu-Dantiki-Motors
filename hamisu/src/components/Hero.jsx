import React, { useEffect } from "react";
import Man from "../assets/images/man1.png";
import Horse from "../assets/images/horse.png";
import Startup from "../assets/images/startup.png";
import Moving from "../assets/images/movingicon.png";
import Support from "../assets/images/supporticon.png";
import Innovate from "../assets/images/innovateicon.png";
import Lady1 from "../assets/images/Lady1.png";
import { TestimonialSection } from "./aboutSections/TestimonialSection";
import { ContactSection } from "./aboutSections/ContactSection";
import { Link } from 'react-router-dom';
import image1 from "../assets/images/image-1.svg";
import image2 from "../assets/images/Rectangle2.png";
import image3 from "../assets/images/Rectangle3.png";
import image4 from "../assets/images/image-2.svg";
import image5 from "../assets/images/image-3.svg";
import image6 from "../assets/images/Rectangle6.png";
import image7 from "../assets/images/Rectangle7.png";
import image8 from "../assets/images/image-4.svg"

const Hero = () => {
  useEffect(() => {
    const calculateImageWidths = () => {
      const firstRowImages = document.querySelectorAll('.div-one img');
      let totalWidth = 0;

      firstRowImages.forEach((img, index) => {
        if (index < firstRowImages.length / 2) {
          totalWidth += img.offsetWidth;
        }
      });

      const animationDuration = Math.max(20, totalWidth / 50);

      document.documentElement.style.setProperty('--scroll-duration', `${animationDuration}s`);
    };

    window.addEventListener('load', calculateImageWidths);

    const timer = setTimeout(calculateImageWidths, 500);

    return () => {
      window.removeEventListener('load', calculateImageWidths);
      clearTimeout(timer);
    };
  }, []);

  const firstRowImages = [image1, image2, image3, image4];
  const secondRowImages = [image5, image6, image7, image8];


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
          <Link to="/about-us">
            <button className="bg-orange-500 text-white text-xl font-semi px-6 py-3 rounded-lg hover:bg-orange-600 mt-6 mb-5 hover:scale-105 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full img-div">
        <div className="div-one">
          {firstRowImages.map((img, index) => (
            <img key={`row1-orig-${index}`} src={img} alt={`image ${index + 1}`} className="img" />
          ))}

          {firstRowImages.map((img, index) => (
            <img key={`row1-dup-${index}`} src={img} alt={`image ${index + 1}`} className="img" />
          ))}
          {firstRowImages.map((img, index) => (
            <img key={`row1-dup-${index}`} src={img} alt={`image ${index + 1}`} className="img" />
          ))}
          {firstRowImages.map((img, index) => (
            <img key={`row1-dup-${index}`} src={img} alt={`image ${index + 1}`} className="img" />
          ))}
        </div>
        <div className="div-two">
          {secondRowImages.map((img, index) => (
            <img key={`row2-orig-${index}`} src={img} alt={`image ${index + 5}`} className="img" />
          ))}
          {secondRowImages.map((img, index) => (
            <img key={`row2-dup-${index}`} src={img} alt={`image ${index + 5}`} className="img" />
          ))}
          {secondRowImages.map((img, index) => (
            <img key={`row2-dup-${index}`} src={img} alt={`image ${index + 5}`} className="img" />
          ))}
          {secondRowImages.map((img, index) => (
            <img key={`row2-dup-${index}`} src={img} alt={`image ${index + 5}`} className="img" />
          ))}
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
          <Link to="/services">
            <button className="mt-8 bg-white text-black text-lg font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition hover:scale-105 duration-300">
              Learn More
            </button>
          </Link>
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
            <Link to="/about-us">
              <button className="block text-2xl font-light text-amber-50 cursor-pointer underline">
                Learn more
              </button>
            </Link>
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
            <Link to="/contact" >
              <button className="block text-2xl font-light text-amber-50 cursor-pointer underline">
                Contact
              </button>
            </Link>
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
            <Link to="/products" >
              <button className="block text-2xl font-light text-amber-50 cursor-pointer underline">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#FC7A1E] flex flex-row  pt-20 pl-20">
        <div>
          <div>
            <span className="block text-amber-50 text-5xl">
              Discover Our Impressive
            </span>
            <span className="block text-amber-50 text-5xl">
              Achievments in Engine Oil
            </span>
            <span className="block text-amber-50 text-5xl pb-10">
              Distribution
            </span>
            <span className="block font-light text-2xl text-white">
              With over 20 years in the industry,we have established ourselves
              as a
            </span>
            <span className="block font-light text-2xl text-white">
              trusted leader in engine oil distribution. Our commitment to
              quality
            </span>
            <span className="block font-light text-2xl text-white pb-7">
              and customer satisfaction has resulted in thousands of satisfied
              clients
            </span>

            <div className="flex flex-row gap-20">
              <div>
                <span className="block text-7xl text-amber-50 font-bold pb-5">
                  1M+
                </span>
                <span className="block text-2xl text-amber-50">
                  Gallons of Oil distributed anually.
                </span>
              </div>
              <div>
                <span className="block text-7xl text-amber-50 font-bold pb-5">
                  95%
                </span>
                
                <span className="block text-2xl text-amber-50">
                  Client satisfaction rate based on
                </span>
                <span className="block text-2xl text-amber-50">feedback.</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Lady1} alt />
          
        </div>
      </div>

      <div>
        <TestimonialSection />
      </div>

      <div>
        <ContactSection />
      </div>
    </div>
  );
      
};

export default Hero;
