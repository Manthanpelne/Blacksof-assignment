"use client";
import Image from 'next/image';
import React from 'react';

export default function NotificationStack() {
  const notifications = [
    { id: 1, service: "MESSAGES", title: "RECIPE ALERT", time: "now", icon: "/whatsapp.png" },
    { id: 2, service: "WHATSAPP", title: "4F NW CORRIDOR...", time: "2m ago", icon: "/messages.png" },
    { id: 3, service: "MAIL", title: "CHILLER 2 250TR...", time: "1m ago", icon: "/mail.png" },
  ];

  return (
    <div className="absolute left-[577px] top-[350px] z-200 w-[280px]">
      {/* Parent Div */}
      <div className="relative w-full max-w-[400px]">
        
        {notifications.map((n, i) => (
          <div
            key={n.id}
            style={{
              // This creates the "Decline" effect: moving cards down and right
              top: `${i * 62}px`,
              left: `${i * 25}px`,
              zIndex: 10 - i,
            }}
            className={`
              absolute w-[160px] p-2 rounded-xl bg-white shadow-xl border border-gray-100
              /* THE TILT: Matching the phone angle precisely */
              transform -rotate-[11deg] skew-x-[11deg] skew-y-[1deg]
              transition-transform duration-300 hover:scale-105
            `}
          >
            {/* Card Content */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Image src={n.icon} alt="img" width={10} height={10} />
                <span className="text-[7px] font-bold text-gray-400 tracking-widest">{n.service}</span>
              </div>
              <span className="text-[7px] text-gray-400">{n.time}</span>
            </div>
            
            <h3 className="text-[#CA3604] text-[8px] font-bold leading-tight uppercase">
              {n.title}
            </h3>
            
            <p className="text-[7px] text-gray-800 mt-1 leading-snug">
              The system has detected a critical alert...
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}