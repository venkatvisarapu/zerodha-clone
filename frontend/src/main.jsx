import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import Productpage from './landing_page/products/Productpage';
import Support from './landing_page/support/Support';
import Pricingpage from './landing_page/pricing/Pricingpage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

import './index.css';
import Notfound from './landing_page/Notfound';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
