import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPAge';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Services from "./pages/Services"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
