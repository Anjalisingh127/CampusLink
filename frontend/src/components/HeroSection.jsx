import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingTexts = [
    "Hackathons & Coding Challenges",
    "Internship Opportunities", 
    "Tech Workshops & Seminars",
    "Career Building Events"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const statsData = [
    { number: "10K+", label: "Students Connected" },
    { number: "500+", label: "Events Monthly" },
    { number: "50+", label: "Partner Companies" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full opacity-10 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 animate-bounce animation-delay-500">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-xl font-bold">{'<>'}</span>
          </div>
        </div>
        <div className="absolute top-1/3 right-1/5 animate-bounce animation-delay-1000">
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">🏆</span>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/5 animate-bounce animation-delay-1500">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">💼</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          
          {/* Left Side - Content */}
          <div className={`lg:w-1/2 text-center lg:text-left transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <span className="text-cyan-300 text-sm font-medium">🚀 Your Gateway to Opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Discover
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Amazing
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent transition-all duration-500">
                {rotatingTexts[currentText]}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of students finding their next big opportunity. 
              <span className="text-cyan-300 font-semibold"> AI-powered recommendations</span> just for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Start Exploring Events</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-2xl hover:bg-purple-400 hover:text-purple-900 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Watch Demo</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                No signup required to browse
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                Free forever
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                AI-powered matching
              </span>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className={`lg:w-1/2 mt-12 lg:mt-0 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* 3D Card Stack */}
            <div className="relative mx-auto max-w-md">
              {/* Card 3 (Background) */}
              <div className="absolute top-8 left-8 w-full h-80 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-3xl backdrop-blur-sm border border-pink-500/30 transform rotate-6"></div>
              
              {/* Card 2 (Middle) */}
              <div className="absolute top-4 left-4 w-full h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-purple-500/30 transform rotate-3"></div>
              
              {/* Card 1 (Front) */}
              <div className="relative w-full h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-blue-500/30 p-6 transform hover:rotate-1 transition-transform duration-500">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Smart Matching</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our AI analyzes your skills and interests to recommend the perfect events, hackathons, and opportunities
                  </p>
                  
                  {/* Mini Stats */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">98%</div>
                      <div className="text-xs text-gray-400">Match Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">2.5s</div>
                      <div className="text-xs text-gray-400">Avg Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
