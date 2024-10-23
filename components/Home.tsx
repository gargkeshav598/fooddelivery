"use client";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {EnhancedLandingPageComponent} from '@/components/enhanced-landing-page';
import OrderPage from '@/components/order-page';

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
      <Router>
        <Routes>
          <Route path="/" element={<EnhancedLandingPageComponent windowWidth={windowWidth} />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </Router>
    </div>
  );
}
