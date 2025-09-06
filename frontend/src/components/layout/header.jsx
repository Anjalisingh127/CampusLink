import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [notifications] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowProfileDropdown(false);
    };
    if (showProfileDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showProfileDropdown]);

  const navigationItems = [
    { name: 'Home', href: '#', active: true },
    { name: 'Events', href: '#', active: false },
    { name: 'Hackathons', href: '#', active: false },
    { name: 'Internships', href: '#', active: false },
    { name: 'Community', href: '#', active: false }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileDropdown(false);
  };

  return (
    <div>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-xl border-b border-gray-100' 
          : 'bg-gray-900 bg-opacity-95'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-white font-bold text-lg">C</div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 animate-pulse"></div>
              </div>
              <div>
                <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  CampusConnect
                </h1>
                <p className={`text-xs hidden sm:block transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  Your Event Hub
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    item.active
                      ? isScrolled 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-blue-400 font-semibold'
                      : isScrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.name}
                  {item.active && (
                    <div className={`absolute -bottom-1 left-0 right-0 h-1 rounded-full transition-colors duration-300 ${
                      isScrolled ? 'bg-blue-600' : 'bg-blue-400'
                    }`}></div>
                  )}
                </a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              
              {/* Search Button */}
              <button className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600'
              }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm">Search events...</span>
                <span className={`px-2 py-1 text-xs rounded-md font-medium ${
                  isScrolled ? 'bg-gray-200 text-gray-600' : 'bg-gray-700 text-gray-300'
                }`}>
                  ⌘K
                </span>
              </button>

              {/* Mobile Search Icon */}
              <button className={`sm:hidden p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100 border border-gray-200' 
                  : 'text-gray-200 hover:bg-gray-800 border border-gray-600'
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  {/* Notifications */}
                  <button className={`relative p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                    isScrolled 
                      ? 'text-gray-700 hover:bg-gray-100 border border-gray-200' 
                      : 'text-gray-200 hover:bg-gray-800 border border-gray-600'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5V9.5a6.5 6.5 0 10-13 0V12l-5 5h5a3 3 0 006 0z" />
                    </svg>
                    {notifications > 0 && (
                      <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                        {notifications}
                      </span>
                    )}
                  </button>

                  {/* Profile Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowProfileDropdown(!showProfileDropdown);
                      }}
                      className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                        isScrolled 
                          ? 'text-gray-700 hover:bg-gray-100 border border-gray-200' 
                          : 'text-gray-200 hover:bg-gray-800 border border-gray-600'
                      } ${showProfileDropdown ? 'ring-2 ring-blue-500' : ''}`}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        J
                      </div>
                      <svg className={`w-4 h-4 transition-transform duration-300 ${showProfileDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {showProfileDropdown && (
                      <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 animate-in slide-in-from-top-2 duration-200">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-semibold text-gray-900">John Doe</p>
                          <p className="text-xs text-gray-500">john.doe@college.edu</p>
                        </div>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                          <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          View Profile
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                          <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Dashboard
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                          <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Settings
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                          <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Help & Support
                        </a>
                        <hr className="my-2 border-gray-100" />
                        <button 
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 text-left"
                        >
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Auth Buttons */
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={handleLogin} 
                    className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600 border border-gray-300 hover:border-blue-400' 
                        : 'text-gray-200 hover:text-white border border-gray-500 hover:border-gray-300'
                    }`}
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={handleLogin}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-300"
                  >
                    Get Started
                  </button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100 border border-gray-200' 
                    : 'text-gray-200 hover:bg-gray-800 border border-gray-600'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className={`border-t transition-colors duration-300 pt-4 ${
              isScrolled ? 'border-gray-200' : 'border-gray-700'
            }`}>
              <nav className="space-y-2">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                      item.active
                        ? isScrolled 
                          ? 'text-blue-600 bg-blue-50 font-semibold border-l-4 border-blue-600' 
                          : 'text-blue-400 bg-gray-800 font-semibold border-l-4 border-blue-400'
                        : isScrolled
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              
              {/* Mobile Auth Section */}
              {!isLoggedIn && (
                <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
                  <button 
                    onClick={handleLogin}
                    className={`w-full px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-700 border border-gray-300 hover:bg-gray-50' 
                        : 'text-gray-200 border border-gray-600 hover:bg-gray-800'
                    }`}
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={handleLogin}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold rounded-xl shadow-lg"
                  >
                    Get Started Free
                  </button>
                </div>
              )}
              
              {/* Mobile Search */}
              <div className={`mt-4 pt-4 border-t ${isScrolled ? 'border-gray-200' : 'border-gray-700'}`}>
                <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-700 border border-gray-200' 
                    : 'bg-gray-800 text-gray-200 border border-gray-600'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="font-medium">Search events...</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
