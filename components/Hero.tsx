
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
             Limited to 20 spots this week
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-stone-900">
            Real people. <br />
            Real weekends. <br />
            <span className="text-orange-600 italic underline decoration-stone-200 underline-offset-8">No phones.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-md leading-relaxed">
            Every weekend, small groups from campus meet for food, walks, games, and deep conversations — without the digital noise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 transition-all active:scale-95">
              Join This Weekend
            </button>
            <button className="bg-white border-2 border-stone-200 text-stone-800 px-8 py-4 rounded-2xl text-lg font-bold hover:border-stone-400 transition-all">
              See the vibes
            </button>
          </div>
          
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i+40}/100/100`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Student" />
              ))}
            </div>
            <p className="text-sm text-stone-500 font-medium">Joined by 120+ campus students last month</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000" 
              alt="Students laughing at a park" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Sunday Sundowners</p>
              <h3 className="text-xl font-bold">Riverside Park Picnic</h3>
            </div>
          </div>
          
          {/* Abstract blobs */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-60 -z-10"></div>
          
          {/* Floating Sticker */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-stone-100 z-20 flex items-center gap-3"
          >
            <div className="p-2 bg-green-100 rounded-full">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-tighter">Status</p>
              <p className="text-sm font-bold text-stone-800">Phone-Free Verified</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
