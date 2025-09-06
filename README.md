# CampusLink
CampusConnect - Event Aggregator for College Students 🎓
A modern, AI-powered platform that aggregates events, hackathons, coding challenges, and internship opportunities specifically for college students. Built with React and designed with a focus on user experience and intelligent recommendations.
🌟 Project Overview
CampusConnect solves the problem of scattered event information by providing a centralized hub where students can discover opportunities tailored to their interests and skills. No more missing out on valuable career-building events!
🎯 Problem Statement

Information Scattered: Events posted across multiple platforms (Facebook, Discord, emails, notice boards)
Missed Opportunities: 67% of students miss relevant events due to poor visibility
Time Wastage: Students spend hours searching for suitable events
Lack of Personalization: Generic event listings don't match individual interests

💡 Solution
A centralized, AI-powered platform that:

Aggregates events from multiple sources
Provides personalized recommendations
Enables team formation for hackathons
Tracks achievements and builds portfolios

🚀 Current Features (Implemented)
✅ Navigation Header

Responsive Design: Works perfectly on desktop, tablet, and mobile
Smart Scroll Effect: Changes from dark to light theme when scrolling
Authentication States: Different UI for logged-in and logged-out users
Interactive Elements:

Search functionality with keyboard shortcuts (⌘K)
Notification system with badge counter
Profile dropdown with user management
Mobile hamburger menu



✅ Hero Section
Dynamic Content: Rotating text showcasing different event types
3D Visual Effects: Animated card stack and floating elements
Call-to-Action: Prominent buttons for user engagement
Trust Indicators: Platform statistics and user benefits
Modern Design: Glassmorphism effects and gradient animations

🛠️ Tech Stack

Frontend
React.js 18+ with Hooks and functional components
Tailwind CSS for responsive design and modern styling
JavaScript ES6+ with modern syntax and features

Getting Started
Prerequisites

Node.js (version 14 or higher)
npm or yarn package manager

Installation

Clone the repository
bashgit clone https://github.com/yourusername/event-aggregator-frontend.git
cd event-aggregator-frontend

Install dependencies
bashnpm install

Install Tailwind CSS
bashnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configure Tailwind CSS
Update tailwind.config.js:
javascriptmodule.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Update CSS imports
Add to src/index.css:
css@tailwind base;
@tailwind components;
@tailwind utilities;

Start the development server
bashnpm start

Open your browser
Navigate to http://localhost:3000
