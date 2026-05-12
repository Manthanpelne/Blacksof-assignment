"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 px-6 md:px-20 overflow-hidden">
      
      {/* --- BOTTOM CTA SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-7xl mx-auto rounded-[40px] mb-40"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="max-w-2xl text-center md:text-left flex flex-col justify-center items-center">
            <h2 className="text-2xl text-center md:text-3xl text-black/50 font-[200] leading-tight mb-6">
             Let’s unlock the  
              <span className="font-semibold text-black"> peak performance and efficiency </span>
              of your building.
            </h2>
            <button className="bg-linear-to-t from-[#C2CDD8] via-[#C2CDD8] to-[#ffffff] px-10 py-5 rounded-full font-bold transition-all transform hover:scale-105">
              <span className="text-[#F96D42]">Let's</span> Connect
            </button>
          </div>
        </div>
      </motion.div>

      {/* --- FOOTER MAIN --- */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-20 border-b border-white/10">
          
          {/* Brand Info */}
            <div className="flex items-start gap-2">
               <Image src="/Frame 427321533.png" alt="footer_img" width={150} height={150} />
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-row items-start gap-10">
             <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#CA3604] mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Intelligent Automation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Smart Alerts</li>
              <li className="hover:text-white transition-colors cursor-pointer">Facility Control</li>
              <li className="hover:text-white transition-colors cursor-pointer">Advanced Analytics</li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#CA3604] mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Newsletter/Contact */}
             <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#CA3604] mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Intelligent Automation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Smart Alerts</li>
              <li className="hover:text-white transition-colors cursor-pointer">Facility Control</li>
              <li className="hover:text-white transition-colors cursor-pointer">Advanced Analytics</li>
            </ul>
          </div>

        </div>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-sm">
          <p>© 2026 DeJoule Intelligence Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
            <span className="hover:text-white cursor-pointer">Twitter (X)</span>
            <span className="hover:text-white cursor-pointer">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
}