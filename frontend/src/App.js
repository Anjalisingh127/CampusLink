import React from 'react';
import './index.css';

// Import Components
import Header from './components/layout/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      {/* Navigation Header - Fixed at top */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - Landing Page */}
        <HeroSection />
        
        {/* Future sections will be added here */}
        {/* 
        Example of future components:
        <FeaturesSection />
        <EventsPreview />
        <TestimonialsSection />
        <Footer />
        */}
      </main>
    </div>
  );
}

export default App;
