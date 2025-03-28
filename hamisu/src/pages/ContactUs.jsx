import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/contactSections/ContactSection";

const ContactUs = () => {
  return (
    <section>
      <div>
        <Navbar />
        <ContactSection />
        <Footer />
      </div>
    </section>
  );
};

export default ContactUs;
