import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import WhyPeerUp from './components/WhyPeerUp';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SignupLogin from './components/SignupLogin';
import OnboardingForm from './components/OnboardingForm';

import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './components/DashboardHome';
import Matches from './components/Matches';
import MatchedProfiles from './components/MatchedProfiles';
import ChatSchedule from './components/ChatSchedule';
import UserProfile from './components/UserProfile';

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

        {/* 🔽 Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="matches" element={<Matches />} />
          <Route path="matched" element={<MatchedProfiles />} />
          <Route path="chat" element={<ChatSchedule />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
