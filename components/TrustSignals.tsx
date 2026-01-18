
import React from 'react';
import { ShieldCheck, UserCheck, Heart, Coffee } from 'lucide-react';

const TrustSignals: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white border-b border-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex p-4 bg-stone-50 rounded-full mb-4">
              <ShieldCheck className="w-6 h-6 text-stone-400" />
            </div>
            <p className="font-bold text-stone-800">Campus Built</p>
            <p className="text-xs text-stone-400 uppercase tracking-tighter">Verified Students Only</p>
          </div>
          <div className="text-center">
            <div className="inline-flex p-4 bg-stone-50 rounded-full mb-4">
              <UserCheck className="w-6 h-6 text-stone-400" />
            </div>
            <p className="font-bold text-stone-800">Zero Pressure</p>
            <p className="text-xs text-stone-400 uppercase tracking-tighter">Not a Dating App</p>
          </div>
          <div className="text-center">
            <div className="inline-flex p-4 bg-stone-50 rounded-full mb-4">
              <Heart className="w-6 h-6 text-stone-400" />
            </div>
            <p className="font-bold text-stone-800">Safety First</p>
            <p className="text-xs text-stone-400 uppercase tracking-tighter">Hosted Meetups</p>
          </div>
          <div className="text-center">
            <div className="inline-flex p-4 bg-stone-50 rounded-full mb-4">
              <Coffee className="w-6 h-6 text-stone-400" />
            </div>
            <p className="font-bold text-stone-800">Low Stakes</p>
            <p className="text-xs text-stone-400 uppercase tracking-tighter">Just Good Coffee & Vibes</p>
          </div>
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <p className="text-2xl font-serif text-stone-700 italic">
            "I was hesitant at first, but walking into a group where no one was checking their phone was the most refreshing thing I've done all year."
          </p>
          <p className="mt-4 text-sm font-bold text-stone-900">— Marcus, Engineering Major</p>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
