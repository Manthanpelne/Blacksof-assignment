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
    tag: "Smart Alerts",
    title: "More than alerts. Built-in foresight.",
    desc: "Alerts that offer more than just a warning—delivering precise, actionable intelligence when it matters most. From early fault detection to guided resolution, your team has everything they need to stay ahead of failures and downtime.",
    items: ["Predictive maintenance AI", "Energy waste detection", "SLA compliance reporting"],
    media: "img3.png",
  },
  {
    id: 4,
    tag: "Smart Analytics & Reporting",
    title: "From raw data to real decisions in seconds.",
    desc: "An analytics engine that turns operational data into targeted insights that drive action, not just observation. Built for complex facilities, it empowers your team with clear operational visibility, faster response times, and continuous improvement",
    items: ["Predictive maintenance AI", "Energy waste detection", "SLA compliance reporting"],
    media: "three.gif",
  }
];

export default function MidSection() {
  const [index, setIndex] = useState(0);

  const nextCard = (e?: React.MouseEvent) => {
    // Prevent the button click from bubbling up and triggering the card click twice
    if (e) e.stopPropagation();
    setIndex((prev) => (prev + 1) % featureData.length);
  };

  return (
    <section className="z-[200] mt-100 py-24 w-full min-h-screen">
      
      {/* 1. HEADER SECTION (Return on Intelligence) */}
      <div className="mb-6 flex px-20 items-center gap-2">
        <div className="grid grid-cols-2 gap-1 w-4">
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
      <div className="relative w-full max-w-[1330px] m-auto h-[600px] mt-[254px]">
        <AnimatePresence mode="popLayout">
          {featureData.map((card, i) => {
            // Calculate where this card lives relative to the active index
            const relativeIndex = (i - index + featureData.length) % featureData.length;
            const isCurrent = relativeIndex === 0;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{
                  // Current card is fully solid, background layers subtly fade back
                  opacity: isCurrent ? 1 : Math.max(2.4, 1 - relativeIndex * 0.25),
                  
                  // Adjusting offsets to keep the spacing uniform for all 4 layers
                  y: isCurrent ? 0 : relativeIndex * -75,  
                  scale: isCurrent ? 1 : 1 - relativeIndex * 0.03,
                  zIndex: featureData.length - relativeIndex,
                }}
                exit={{ 
                  y: -550, 
                  opacity: 0, 
                  scale: 0.95,
                  transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] } 
                }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="absolute inset-0 w-full"
                onClick={isCurrent ? () => nextCard() : undefined}
              >
                {/* CARD CONTENT */}
                <div className="bg-white cursor-pointer text-black rounded-[32px] shadow-[inset_0_2px_4px_rgb(253,245,242),_inset_0_5px_20px_rgb(253,245,242)] py-8 pl-12 flex gap-20 h-[620px] bg-linear-to-br from-[#ffffff] via-[#ffffff] to-[#E7ECF2] overflow-hidden">
                  
                  {/* Left Content */}
                  <div className="flex-1 items-center justify-between ">
                    <div className="w-[400px]">
                      <div className="flex items-center gap-6 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#CA3604]" />
                        <span className="font-[400] text-[28px]">{card.tag}</span>
                      </div>
                      <h3 className="text-[24px] font-[400] mb-6 leading-snug">{card.title}</h3>
                      <p className="text-gray-500 text-sm mb-8">{card.desc}</p>
                      
                      <ul className="space-y-4">
                        {card.items.map((item, idx) => (
                          <li key={idx} className="flex justify-between items-center border-b border-gray-100 pb-2">
                            <span className="text-gray-800">{item}</span>
                            <span className="font-bold">+</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={(e) => nextCard(e)}
                      className="mt-18 text-xl bg-[#fef1ec] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),_inset_0_1px_10px_rgb(250,190,170)] bg-clip-text text-transparent bg-linear-to-r from-[#CA3604] to-[#000000] py-4 px-8 rounded-full font-bold w-fit hover:bg-[#CA3604] hover:text-white transition-colors duration-300"
                    >
                      See how it works
                    </button>
                  </div>

                  {/* Right Media Section */}
                  <div className="w-full h-[430px] mt-16 shadow relative rounded-l-2xl overflow-hidden bg-gray-100">
                    <img 
                      src={card.media} 
                      alt="feature visualization" 
                      className="w-full h-full object-fill"
                    />
                  </div>
                </div>
              </motion.div>
            );
          }).reverse()} {/* Reverse ensures proper CSS painting order */}
        </AnimatePresence>
      </div>
    </section>
  );
}