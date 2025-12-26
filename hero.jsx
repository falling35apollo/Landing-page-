import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <section className="hero-animated min-h-screen flex items-center text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8 px-6 py-20 lg:pr-12">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Specialist Home Loans for{' '}
            <span className="text-blue-400">Professionals</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 font-medium">
            Structured for Long-Term Outcomes — Not Just Approval
          </p>

          <div className="space-y-4 py-6">
            <p className="text-lg text-slate-400 leading-relaxed">
              CPA-led mortgage advice for medical, legal, IT, and finance professionals.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Smarter structures. Better borrowing capacity. Fewer long-term mistakes.
            </p>
          </div>

          <div className="pt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Book a Free Strategy Call
            </button>
          </div>

          <div className="pt-12 border-t border-slate-700">
            <p className="text-sm text-slate-500">Trusted by medical, legal, IT, and finance professionals nationwide</p>
          </div>
        </div>

        {/* Right Column - Image (cover column, responsive) */}
        <div className="col-span-1 flex items-stretch">
          <div className="w-full h-72 sm:h-96 md:h-[560px] lg:h-screen relative ml-auto">
            <img
              src="/src/assets/hero1.jpg"
              alt="Professional mortgage advice"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/70 lg:to-slate-900 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}