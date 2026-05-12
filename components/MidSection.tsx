"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const featureData = [
  {
    id: 1,
    tag: "Intelligent Automation",
    title: "Your building's intelligence engine. Learning, adapting, and acting in real time.",
    desc: "Let's bring your systems to life with automation that evolves by the minute, making data-driven decisions to optimize performance.",
    items: ["Joule Recipes for routine actions", "Dynamic equipment orchestration", "Balanced equipment utilization"],
    media: "one.gif",
  },
  {
    id: 2,
    tag: "Facility-Wide Monitoring",
    title: "Complete visibility. Seamless control over every asset.",
    desc: "Monitor your entire infrastructure from a single pane of glass. Real-time telemetry ensures you're never in the dark.",
    items: ["Centralized sensor hub", "Asset health tracking", "Remote setpoint adjustment"],
    media: "tw.gif",
  },
  {
    id: 3,
    tag: "Smart Analytics",
    title: "From raw data to real decisions in seconds.",
    desc: "Turn complex data streams into actionable intelligence. Our analytics layer predicts failures before they happen.",
    items: ["Predictive maintenance AI", "Energy waste detection", "SLA compliance reporting"],
    media: "three.gif",
  }
];

export default function MidSection() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % featureData.length);
  };

  return (
    <section className="z-[200] mt-80 py-24 w-full min-h-screen">
      
      {/* 1. HEADER SECTION (Return on Intelligence) */}
          <div className="mb-6 flex px-20 items-center gap-2">
            <div className="grid grid-cols-2  gap-1 w-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#CA3604] rounded-sm" />
              ))}
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#CA3604]">Return on Intelligence</span>
          </div>
      <div className="w-full px-20 m-auto flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-[200] leading-tight">
            Smarter buildings don't just <br />
            function. <span className="text-black font-semibold">They deliver value.</span>
          </h2>
        </div>
        <div className="text-black/50 text-lg max-w-md pb-2">
          When systems think, buildings give back. DeJoule turns every minute into measurable gain across <span className="text-black">energy, uptime, and user satisfaction</span>.
        </div>
      </div>

      {/* 2. INTERACTIVE STACK */}
      <div className="relative w-full max-w-6xl m-auto h-[600px] mt-54">
        <AnimatePresence mode="popLayout">
          {featureData.map((card, i) => {
            // Logic to determine if card is visible and where
            if (i < index && i !== index - 1 && !(index === 0 && i === featureData.length -1)) return null;
            
            const isCurrent = i === index;
            const isNext = i === (index + 1) % featureData.length;
            const isThird = i === (index + 2) % featureData.length;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                viewport={{ once: true, margin: "-200px" }}
                animate={{
                  opacity: isCurrent ? 1 : (isNext ? 3.8 : 3.4),
                  y: isCurrent ? 0 : (isNext ? -80 : -160),
                  scale: isCurrent ? 1 : (isNext ? 0.95 : 0.9),
                  zIndex: featureData.length - ((i - index + featureData.length) % featureData.length),
                }}
                exit={{ y: -500, opacity: 0, transition: { duration: 0.6 } }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="absolute inset-0 w-full"
              >
                {/* CARD CONTENT */}
                <div  onClick={nextCard} className="bg-white cursor-pointer text-black rounded-[32px] p-8 flex gap-10 h-full shadow-2xl overflow-hidden border border-gray-200">
                  
                  {/* Left Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="w-[400px]">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#CA3604]" />
                        <span className="font-bold text-sm">{card.tag}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-6 leading-snug">{card.title}</h3>
                      <p className="text-gray-500 text-sm mb-8">{card.desc}</p>
                      
                      <ul className="space-y-4">
                        {card.items.map((item, idx) => (
                          <li key={idx} className="flex justify-between items-center border-b border-gray-100 pb-2">
                            <span className="text-gray-800">{item}</span>
                            <span className="text-[#CA3604] font-bold">+</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={nextCard}
                      className="mt-8 bg-[#fef1ec] text-[#CA3604] py-4 px-8 rounded-full font-bold w-fit hover:bg-[#CA3604] hover:text-white transition-colors duration-300"
                    >
                      See how it works
                    </button>
                  </div>

                  {/* Right Media Section */}
                  <div className="w-full shadow relative rounded-2xl overflow-hidden bg-gray-100 ">
                    <img 
                      src={card.media} 
                      alt="feature visualization" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          }).reverse()} {/* Reverse ensures the correct stacking order */}
        </AnimatePresence>
      </div>
    </section>
  );
}