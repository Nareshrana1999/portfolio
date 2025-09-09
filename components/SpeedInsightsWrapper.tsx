'use client';

import { useEffect } from 'react';

export function SpeedInsights() {
  useEffect(() => {
    // This will be executed only on the client side
    const script = document.createElement('script');
    script.src = '/_vercel/speed-insights/script.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
}
