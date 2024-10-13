/* eslint-disable */
"use client";
import { useState, useEffect } from 'react';
import { EnhancedLandingPageComponent } from '@/components/enhanced-landing-page';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <EnhancedLandingPageComponent windowWidth={windowWidth} />
    </div>
  );
}

