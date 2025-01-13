import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time of 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-storm-dark">
      <div className="flex flex-col items-center space-y-8">
        <div className="w-32 h-32 relative">
          <div className="absolute -inset-4 bg-neon/10 rounded-full blur-lg" />
          <img 
            src="/logo (1).png" 
            alt="logo" 
            className="w-full h-full animate-pulse relative"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="h-4 w-4 bg-neon rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="h-4 w-4 bg-neon rounded-full animate-bounce [animation-delay:-0.15s] mx-2" />
          <div className="h-4 w-4 bg-neon rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;