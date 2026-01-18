
import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-orange-600">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-8 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 border-8 border-white rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to unplug?</h2>
        <p className="text-orange-100 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Spots are limited to keep the groups small and cozy. Save yours before the weekend gets here.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-orange-600 px-10 py-5 rounded-2xl text-2xl font-black shadow-2xl shadow-orange-900/40"
        >
          Save My Spot
        </motion.button>
        
        <p className="mt-8 text-orange-200 text-sm font-medium">
          Joined by students from 12+ local campuses.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
