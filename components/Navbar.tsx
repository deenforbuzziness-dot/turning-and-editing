
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-full border border-stone-200/50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg rotate-12 flex items-center justify-center text-white font-bold">T</div>
          <span className="text-xl font-bold tracking-tight text-stone-800">Twende<span className="text-orange-600 italic">Offline</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a href="#how" className="hover:text-orange-600 transition-colors">How it works</a>
          <a href="#why" className="hover:text-orange-600 transition-colors">The Vibe</a>
          <a href="#diff" className="hover:text-orange-600 transition-colors">Why us?</a>
        </div>

        <button className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all active:scale-95">
          Join this weekend
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
