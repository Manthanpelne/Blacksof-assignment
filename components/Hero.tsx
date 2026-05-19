"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NotificationStack from "./NotificationCards";
import { useEffect, useState } from "react";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] as const} 
  }
};

const alertCards = [
  { id: 1, title: "Role-based & SLA-driven", desc: "Get alerts that match your responsibility without any notification clutter. One-click alert subscriptions and SLA-based escalations save time." },
  { id: 2, title: "Root-cause analysis", desc: "Get alerts that tell you the root cause of the problem and history of its occurrence, based on real-time analysis of equipment and building operations." },
  { id: 3, title: "Actionable solutions", desc: "Replace reactive firefighting with direct resolution actions or recommendations to prevent failures, maintain peak performance, and keep your building one step ahead." },
  { id: 4, title: "Multi-channel delivery", desc: "No more lifeless information buried in a BMS, but insights delivered wherever your team works best, on WhatsApp, SMS, or email." }
];

export default function Hero() {
  const [step, setStep] = useState(1);
  const [activeCard, setActiveCard] = useState(0);

  // AUTOMATIC TRIGGER: Wait for initial animations to finish, then move to step 2
  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 2500);
    return () => clearTimeout(timer);
  }, [step]);

  useEffect(() => {
    if (step === 2) {
      const interval = setInterval(() => {
        setActiveCard((prev) => {
          if (prev < alertCards.length - 1) {
            return prev + 1;
          } else {
            // FINISHED ALL CARDS: Reset to Start
            clearInterval(interval);
            setTimeout(() => {
                setStep(1);
                setActiveCard(0);
            }, 2000);
            return prev;
          }
        });
      }, 3000); // 3 seconds per card
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <section className="relative h-screen w-full m-auto flex flex-col items-center justify-start ">
      
      {/* Background Video (Stays constant) */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video autoPlay muted loop playsInline className="h-full opacity-30 w-full object-cover">
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-[25vh] z-10 backdrop-blur-md bg-white/90 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]" />
        <div className="absolute z-20 bottom-0 left-0 w-full h-[30vh] backdrop-blur-md bg-white/90 [mask-image:linear-gradient(to_top,black_60%,transparent)]" />
      </div>

      {/* WRAPPER FOR DISAPPEARING ELEMENTS */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1-content"
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full flex flex-col items-center z-[200]"
          >
            {/* Hero Text */}
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="mt-[18px] w-full max-w-[891px] px-6 text-center mx-auto">
              <div className="mt-[48px] w-full text-center">
                <h1 className="text-h2 md:text-h1 lg:text-lead text-[#CA3604]">AFDD powered by Smart Alerts</h1>
                <p className="text-base md:text-display font-extralight font-sans mt-2">
                  Making alerts <span className='font-semibold'>relevant, personalized,</span> and <span className='font-semibold'>directly actionable</span>
                </p>
              </div>
            </motion.div>

         {/* cards */}
        <motion.div 
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute px-10 top-[20px]  z-200 flex justify-center w-full"
      >
       <div>
             <div className="z-100 absolute w-[438px] left-[38px] bg-linear-to-b from-[#ffffff] via-[#ffffff] to-[#f3f6f9] rounded-[12px] p-[24px] top-[331px]">
                  <div className="flex items-center gap-2">
                    <Image src="/Big-Frame.png" alt="alert" width={20} height={100}/>
                    <h3 className="font-semibold">Smart alert From Dejoule</h3>
                  </div>
                <h3 className="text-[16px] mt-3 text-[#CA3604] font-semibold capitalize ">4F NW Corridor AHU Area Overcooled</h3>
                <p className="text-sm text-black/50">4F NW Corridor area is overcooled where the area temperature is below the setpoint while the valve...</p>
            
             </div>

             <NotificationStack/>

               <div className="z-100 absolute w-[438px] right-[220px] bg-linear-to-b from-[#ffffff] via-[#ffffff] to-[#f3f6f9] rounded-[12px] p-[24px] top-[231px]">
                  <div className="flex items-center gap-2">
                    <Image src="/Big-Frame.png" alt="alert" width={20} height={100}/>
                    <h3 className="font-semibold">Smart alert From Dejoule</h3>
                  </div>
                <h3 className="text-[16px] mt-3 text-[#CA3604] font-semibold capitalize ">CHILLER 2 250TR SJPL TRIPPED</h3>
                <p className="text-sm text-black/50">Chiller tripped due to high discharge pressure caused by insufficent cooling tower operation...</p>
            
             </div>

               <div className="z-100 absolute w-[438px] bg-linear-to-b from-[#ffffff] via-[#ffffff] to-[#f3f6f9] rounded-[12px] p-[24px] right-[50px] top-[481px]">
                  <div className="flex items-center gap-2">
                    <Image src="/Big-Frame.png" alt="alert" width={20} height={100}/>
                    <h3 className="font-semibold">Smart alert From Dejoule</h3>
                  </div>
                <h3 className="text-[16px] mt-3 text-[#CA3604] font-semibold capitalize ">CHILLED WATER PUMP 1 MAINTAINANCE REQUIRED</h3>
                <p className="text-sm text-black/50">Low power consumption detected for CHWP possibly due to blocked strainer</p>
            
             </div>
       </div>
        </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE: Moves to the right smoothly */}
      <motion.div 
        initial={{ y: 200, opacity: 0, rotate: 10, x: 10 }}
        animate={{ 
            y: 0, 
            opacity: 1, 
            rotate: step === 1 ? 12 : 5, // Straightens slightly in step 2
            x: step === 1 ? 0 : 330 , 
            scale: step === 1 ? 1 : 1.38  // Moves to the right in step 2
        }}
        transition={{ 
            delay: step === 1 ? 0.4 : 0, // Initial delay, but instant response when step changes
            duration: 1.5, 
            ease: [0.22, 1, 0.36, 1] 
        }}
        className="absolute bottom-[-300px] z-50 flex justify-center w-full"
      >
        <div className="relative w-[300px] -rotate-[17deg] h-[600px] md:w-[761px] md:h-[934px]">
          <Image fill className="object-contain" src="/mobile.png" alt="mobile" priority />
        </div>
      </motion.div>


      {/* 3. PHASE 2: NEW NOTIFICATIONS (Appearing on the left) */}
      <AnimatePresence>
        {step === 2 && (
          <motion.div
            initial="hidden"
            animate="visible"
            className="absolute transform rotate-[11deg] skew-x-[20deg] -skew-y-[17deg] left-[8.6%] top-[2%] z-[200] flex flex-col gap-6"
          >
              <motion.div
                variants={{
                  hidden: { x: -50, opacity: 0, scale: 0.9 },
                  visible: { 
                    x: 0, 
                    opacity: 1, 
                    scale: 1.2,
                    transition: { 
                      delay: 1.5,// Wait for mobile to move, then stagger cards
                      duration: 1.5,
                      ease: [0.22, 1, 0.36, 1]
                    } 
                  }
                }}
              >
              <NotificationStack/>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


  {/* PHASE 2: NEW SECTION */}
      <AnimatePresence>
        {step === 2 && (
          <motion.div
          initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration:0.8 }}
            className="absolute left-0 w-full h-full z-[200] px-10 pt-[100px]"
          >
            <div className="w-[580px]">
          <h1 className="text-[54px] leading-[66px] font-[300]">Redefining what <span className="font-semibold">alerts</span> should do for you</h1>
          <p className="mt-3 text-md">Operations teams shouldn’t be bombarded with irrelevant, static, and stagnating alerts that increase overhead instead of reducing it.</p>
          <p className="text-md mt-2">Smart Alerts by DeJoule is redefining how alerts should speak to you—personalized, actionable, and like an intelligent teammate, always guiding you with clear, corrective steps.</p>
        </div>

            {/* STACKED ALERTS CONTAINER */}
            <div className="relative mt-10 h-[300px] w-[500px]">
              {alertCards.map((card, index) => {
                const isCurrent = index === activeCard;
                const isPast = index < activeCard;
                return (
                  <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ 
                    opacity: isCurrent ? 1 : (isPast ? 0.4 : 0), 
                    y: isCurrent ? 0 : (isPast ? (activeCard - index) * 180 : 100),
                    
                    scale: isCurrent ? 1 : 0.95,
                    zIndex: index // Ensures newer cards are always on top
                    }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="absolute top-0 left-0 w-[447px]  p-6"
                  >
                    <h2 className="text-xl mb-2 font-semibold text-[#CA3604]">{card.title}</h2>
                    <p className="text-black/60">{card.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}