import React from 'react';
import { GraduationCap } from 'lucide-react';

const Hero = ({ onExplore }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mb-4">
              <GraduationCap size={16} />
              Your campus marketplace
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
              Buy, sell, and swap everything for campus life
            </h1>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              From textbooks and lab kits to dorm decor and gadgets — discover great deals from fellow students, all in one trusted place.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button onClick={onExplore} className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500">
                Explore products
              </button>
              <a href="#sell" className="px-5 py-3 rounded-lg border font-medium text-gray-700 hover:bg-gray-50">
                List an item
              </a>
            </div>
            <div className="mt-6 text-xs text-gray-500">
              Safe meetups • Verified campus emails • No listing fees
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg" />
            <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow px-3 py-2 text-xs font-medium text-gray-700">
              Popular now: Calculus Textbooks, Headphones, Graphing Calculators
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
