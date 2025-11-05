"use client";
import React, { useEffect, useRef } from "react";

const BentoItem = ({ className = "", children }) => {
  const itemRef = useRef(null);
  const MAX_ROTATION = 10;

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return; // Disable tilt on mobile
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * MAX_ROTATION;
      const rotateX = (-(y - centerY) / centerY) * MAX_ROTATION;
      item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05,1.05,1.05)`;
    };

    const handleMouseLeave = () => {
      item.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    };

    item.addEventListener("mousemove", handleMouseMove);
    item.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      item.removeEventListener("mousemove", handleMouseMove);
      item.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`bento-item transition-transform duration-300 ease-out bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${className}`}
    >
      {children}
    </div>
  );
};

export const Component = () => {
  return (
    <div className="aurora-container w-full aurora-bento-scoped px-4 sm:px-6 py-12 sm:py-16 flex justify-center">
      <div className="w-full max-w-6xl z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 text-center mb-4">
          Powerful Features
        </h1>
        <p className="text-center text-base sm:text-lg text-gray-400 mb-10">
          Innovative solutions for the modern web.
        </p>

        <div className="bento-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <BentoItem className="col-span-1 sm:col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                AI-Powered Analysis
              </h2>
              <p className="mt-2 text-gray-300 text-sm sm:text-base">
                Advanced AI analyzes your codebase structure, dependencies, and
                patterns to generate accurate documentation automatically.
              </p>
            </div>
          </BentoItem>

          <BentoItem>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Multi-Language Support
            </h2>
            <p className="mt-2 text-gray-300 text-sm">
              Supports multiple programming languages including Python,
              JavaScript, TypeScript, Go, Rust, Java, and more.
            </p>
          </BentoItem>

          <BentoItem>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Instant Generation
            </h2>
            <p className="mt-2 text-gray-300 text-sm">
              Generate comprehensive READMEs in seconds. No configuration files,
              no setup required—just one command.
            </p>
          </BentoItem>

          {/* 🎬 Responsive Video Section */}
          <BentoItem className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 overflow-hidden relative p-0 h-auto aspect-[16/9]">
            <video
              src="/new.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-7 text-white">
              <h2 className="text-base sm:text-lg font-bold bg-black/70 px-3 py-1 rounded-full">
                In Action 🎬
              </h2>
            </div>
          </BentoItem>
        </div>
      </div>
    </div>
  );
};
