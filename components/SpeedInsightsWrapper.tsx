'use client';

import { SpeedInsights as SpeedInsightsBase } from '@vercel/speed-insights/next';
import { useEffect } from 'react';

export function SpeedInsights() {
  // Only render in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // Log performance metrics
  useEffect(() => {
    if ('connection' in navigator) {
      // @ts-ignore - EffectiveConnectionType is not in TypeScript's lib.dom.d.ts yet
      const connection = navigator.connection as {
        effectiveType?: string;
        saveData?: boolean;
        rtt?: number;
      };
      
      console.log('Connection Type:', connection.effectiveType);
      console.log('Save Data Mode:', connection.saveData);
      console.log('Round Trip Time:', connection.rtt);
    }

    // Log Core Web Vitals
    const onPerfEntry = (metric: any) => {
      console.log(metric.name, metric.value);
    };

    // @ts-ignore - webVitals is not in TypeScript's lib.dom.d.ts yet
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }, []);
  
  return (
    <>
      <SpeedInsightsBase 
        route=""
        debug={false}
        sampleRate={100}
      />
    </>
  );
}
