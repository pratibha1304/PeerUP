// import React from 'react';

// import Hero from './components/Hero';

// function App() {
//   return (
//     <div>
//       <Hero />
//       <WhyPeerUp />
//       <HowItWorks />
//       <Testimonials />
//       <Footer /> 
//     </div>
//   );
// }


// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import WhyPeerUp from './components/WhyPeerUp';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SignupLogin from './components/SignupLogin';
import OnboardingForm from './components/OnboardingForm';
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
        <Route path="/onboarding" element={<OnboardingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
