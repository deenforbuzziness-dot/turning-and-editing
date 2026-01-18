
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhySection from './components/WhySection';
import Differences from './components/Differences';
import TrustSignals from './components/TrustSignals';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-orange-200">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <HowItWorks />
        <Differences />
        <TrustSignals />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
