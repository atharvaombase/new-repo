import React, { useState, useEffect, useCallback } from "react";
import {
  Code2,
  Terminal,
  Cloud,
  Brain,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    "/src/assets/hero_image/t1.jpg",
    "/src/assets/hero_image/t2.jpg",
    "/src/assets/hero_image/t3.jpg",
    "/src/assets/hero_image/t4.jpg",
    "/src/assets/hero_image/t5.jpg",
    "/src/assets/hero_image/t6.jpg",
  ];

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const changeImage = useCallback(
    (direction) => {
      if (isAnimating) return;

      setIsAnimating(true);
      if (direction === "next") {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else {
        setCurrentImageIndex(
          (prev) => (prev - 1 + images.length) % images.length
        );
      }

      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    },
    [isAnimating, images.length]
  );

  // Auto change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        changeImage("next");
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [changeImage, isAnimating]);

  return (
    <div className="relative bg-storm-darker overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Base overlay */}
        <div className="absolute inset-0 bg-storm-darker/20 z-10" />

        {/* Image Container */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              opacity: 0.8,
              transform: isAnimating ? "scale(1.08)" : "scale(1.05)",
            }}
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => changeImage("prev")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-storm-darker/50 p-2 rounded-full hover:bg-storm-darker/70 transition-colors duration-200 focus:outline-none"
        >
          <ChevronLeft className="h-8 w-8 text-neon" />
        </button>
        <button
          onClick={() => changeImage("next")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-storm-darker/50 p-2 rounded-full hover:bg-storm-darker/70 transition-colors duration-200 focus:outline-none"
        >
          <ChevronRight className="h-8 w-8 text-neon" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentImageIndex ? "bg-neon" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-storm-darker/20 via-transparent to-storm-darker/20 z-20" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-40 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex justify-between gap-30">
            <div className="sm:text-center lg:text-left p-6 rounded-lg bg-storm-darker/50 backdrop-blur-sm">
              <div className="welcome">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-neon">CodeStorm</span>
                </h1>
                <div className="justify-end relative">
                  <div className="absolute -inset-4 bg-neon/10 rounded-full blur-xl" />
                  <img src="/logo.png" alt="logo" className="w-32 relative" />
                </div>
              </div>

              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Empowering future developers through competitive programming,
                web development, cloud computing, and AI. Join us in our journey
                to master the art of coding.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#join"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-neon hover:bg-neon-dark md:py-4 md:text-lg md:px-10"
                  >
                    Join Us
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#events"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neon bg-storm-dark/90 hover:bg-storm-light md:py-4 md:text-lg md:px-10"
                  >
                    View Events
                  </a>
                </div>
              </div>
            </div>
          </main>
          <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
            <div className="flex space-x-4 opacity-20">
              <Code2 className="h-24 w-24 text-neon" />
              <Terminal className="h-24 w-24 text-neon" />
              <Cloud className="h-24 w-24 text-neon" />
              <Brain className="h-24 w-24 text-neon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
