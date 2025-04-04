import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/contactSections/ContactSection";
import GetStartedSection from "../components/contactSections/GetStartedSection";

const ContactUs = () => {
  return (
    <section>
      <div>
        <Navbar />
        <GetStartedSection />
        <ContactSection />
        <Footer />
      </div>
    </section>
  );
};

export default ContactUs;
