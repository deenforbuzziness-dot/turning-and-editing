
import React from 'react';
import { motion } from 'framer-motion';

const Differences: React.FC = () => {
  return (
    <section id="diff" className="py-24 px-6 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">The Difference</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Different by <span className="italic">design.</span></h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-orange-500 text-3xl font-serif">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Curated Small Groups</h4>
                  <p className="text-stone-400">Groups are limited to 6-8 people. It's intimate enough to actually talk to everyone, but big enough to not be awkward.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-orange-500 text-3xl font-serif">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Strictly Phone-Free</h4>
                  <p className="text-stone-400">We create a digital sanctuary. For 3 hours, you're unreachable by anyone except the people sitting right in front of you.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-orange-500 text-3xl font-serif">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Experience Focused</h4>
                  <p className="text-stone-400">No "speed friending" or awkward mixers. We do activities people actually like doing anyway.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden h-64 mt-12 shadow-2xl"
              >
                <img src="https://picsum.photos/seed/groups1/500/800" className="w-full h-full object-cover" alt="Group of friends" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden h-64 shadow-2xl"
              >
                <img src="https://picsum.photos/seed/groups2/500/800" className="w-full h-full object-cover" alt="Outdoor activity" />
              </motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 p-8 rounded-full text-white font-bold text-xl rotate-12 shadow-2xl border-4 border-stone-900">
              PURE VIBES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differences;
