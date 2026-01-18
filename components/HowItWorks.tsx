
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Zap } from 'lucide-react';

const steps = [
  {
    icon: <Sparkles className="w-8 h-8 text-orange-600" />,
    title: "Join the circle",
    desc: "Sign up and tell us what you're into. No bios, just your vibe."
  },
  {
    icon: <Calendar className="w-8 h-8 text-orange-600" />,
    title: "Pick a weekend vibe",
    desc: "Choose from curated small-group meetups happening this weekend."
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-600" />,
    title: "Show up & unplug",
    desc: "Phones go in a pouch (or pocket) at the start. Real life begins."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">How it works</h2>
        <p className="text-stone-500 max-w-lg mx-auto">Three simple steps to a better weekend. No awkwardness, just pure connection.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
              {step.icon}
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">{step.title}</h3>
            <p className="text-stone-500 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
