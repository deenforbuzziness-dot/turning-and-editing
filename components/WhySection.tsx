
import React from 'react';
import { motion } from 'framer-motion';

const WhySection: React.FC = () => {
  return (
    <section id="why" className="py-24 px-6 bg-stone-100/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block"
        >
          Our Manifesto
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-stone-900 mb-10 leading-tight"
        >
          Too much scrolling. <br className="hidden md:block" />
          Too little real connection.
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <p className="text-xl text-stone-700 leading-relaxed font-medium">
              We’ve all been there. Sunday night hits, and you realize you spent the whole weekend alone with your screen. 
            </p>
            <p className="text-stone-500 leading-relaxed">
              We're building a safe, chill space to reconnect with people your own age without the pressure of dating apps or the noise of social media.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <p className="text-xl text-stone-700 leading-relaxed font-medium">
              It’s not an event. It’s a vibe. 
            </p>
            <p className="text-stone-500 leading-relaxed">
              From coffee walks to board game nights and sunset picnics, we curate low-stakes experiences that actually make you feel human again.
            </p>
            <div className="pt-4 italic text-stone-400 font-serif">
              "Finally, a reason to put my phone in a drawer for 3 hours." — Sarah, Sophmore
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
