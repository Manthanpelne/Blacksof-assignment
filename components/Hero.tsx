"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import NotificationStack from "./NotificationCards";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full m-auto flex flex-col items-center justify-start ">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full opacity-30 w-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-[25vh] z-10 backdrop-blur-md bg-white/90 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]" />
        {/* BOTTOM BLUR OVERLAY */}
        <div className="absolute bottom-0 left-0 w-full h-[25vh] z-10 backdrop-blur-md bg-white/90 [mask-image:linear-gradient(to_top,black_60%,transparent)]" />
      </div>

      {/* Your Provided Content Section */}
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="relative z-10 mt-[18px] w-full max-w-[851px] px-6 text-center mx-auto"
      >
        <div className="mt-[48px] w-[851px] text-center m-auto">
      <h1 className="text-h2 md:text-h1 lg:text-lead text-[#CA3604]">
      AFDD powered by Smart Alerts
      </h1>
      <p className="text-base md:text-display font-extralight font-sans mt-2">
       Making alerts <span className='font-semibold'>relevant, personalized,</span> and <span className='font-semibold'>directly actionable</span>
       </p>
     </div>
      </motion.div>

  {/* mobile  */}
      <motion.div 
        initial={{ y: 200, opacity: 0, rotate: 12 }}
        animate={{ y: 0, opacity: 1, rotate: 12 }}
        transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[-300px] z-50 flex justify-center w-full"
      >
        <div className="relative w-[300px] -rotate-[17deg] h-[600px] md:w-[761px] md:h-[934px]">
          <Image 
            fill 
            className="object-contain" 
            src="/mobile.png" 
            alt="mobile" 
            priority
          />
        </div>
      </motion.div>


      {/* cards */}
        <motion.div 
        initial={{ y: 200, opacity: 0, rotate: 12 }}
        animate={{ y: 0, opacity: 1, rotate: 12 }}
        transition={{ delay: 1.0, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[50px] z-50 flex justify-center w-full"
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
       </div>
    </motion.div>
    </section>

  );
}