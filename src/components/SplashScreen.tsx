"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Start exit transition
    const exitTimer = setTimeout(() => {
      setAnimating(true);
    }, 1300);

    // Completely remove from DOM
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#071527] transition-all duration-700 ease-in-out ${
        animating ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div className="flex flex-col items-center text-center px-4 max-w-lg">
        {/* Animated Bearing/Gear Vector */}
        <div className="w-24 h-24 relative mb-6 animate-splash-logo">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-[#F2A900] drop-shadow-[0_0_15px_rgba(242,169,0,0.4)]"
          >
            {/* Outer Ring */}
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8" />
            {/* Inner Ring */}
            <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="6" />
            {/* ball bearings */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
              const rad = (angle * Math.PI) / 180;
              const cx = 50 + 32 * Math.cos(rad);
              const cy = 50 + 32 * Math.sin(rad);
              return (
                <circle
                  key={index}
                  cx={cx}
                  cy={cy}
                  r="5"
                  fill="currentColor"
                />
              );
            })}
          </svg>
        </div>

        {/* Brand Text */}
        <div className="overflow-hidden mb-2">
          <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-wider leading-none uppercase animate-splash-text">
            Industrial Bearing
          </h2>
        </div>
        <div className="overflow-hidden">
          <h3 className="text-[#F2A900] text-xl sm:text-2xl font-extrabold tracking-widest uppercase animate-splash-subtext">
            &amp; Chain Centre
          </h3>
        </div>

        {/* Shimmer loading bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full mt-8 overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-[#F2A900] to-transparent w-2/3 animate-splash-loading" />
        </div>
      </div>
    </div>
  );
}
