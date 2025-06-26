import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import WhyPeerUp from './components/WhyPeerUp';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SignupLogin from './components/SignupLogin'; // 👈 import new component

function LandingPage() {
  return (
    <>
      <Hero />
      <WhyPeerUp />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<SignupLogin />} />
        {/* Add more routes here as you build */}
      </Routes>
    </Router>
  );
}

export default App;
