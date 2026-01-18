
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">T</div>
          <span className="text-lg font-bold tracking-tight text-stone-800">Twende<span className="text-orange-600 italic">Offline</span></span>
        </div>
        
        <div className="flex gap-8 text-sm text-stone-500 font-medium">
          <a href="#" className="hover:text-stone-900">Privacy</a>
          <a href="#" className="hover:text-stone-900">Safety Guide</a>
          <a href="#" className="hover:text-stone-900">Host a Vibe</a>
          <a href="#" className="hover:text-stone-900">Contact</a>
        </div>
        
        <div className="flex items-center gap-4">
           <p className="text-stone-400 text-xs">© 2024 Twende Offline. Handcrafted for humans.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
