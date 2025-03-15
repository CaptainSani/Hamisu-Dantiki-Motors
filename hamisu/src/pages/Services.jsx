import React from 'react';
import Navbar from '../components/Navbar';
import  Footer from '../components/Footer';
import HeroSection from "../components/serviceSections/HeroSection";
import { ContactSection } from "../components/aboutSections/ContactSection";
import NationwideDelivery from "../components/serviceSections/NationwideDelivery";
import ExpertConsultation from '../components/serviceSections/ExpertConsultation';
import PartnershipOpportunity from '../components/serviceSections/PartnershipOpportunity';
import WholesaleDistribution from '../components/serviceSections/WholesaleDistribution';

const Services = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
      <HeroSection />
      <WholesaleDistribution />
      <ExpertConsultation />
      <NationwideDelivery />
      <PartnershipOpportunity />
      <ContactSection />
      </main>
      <Footer />
      </div>
  )
}

export default Services