'use client';

import { SpeedInsights as SpeedInsightsBase } from '@vercel/speed-insights/next';

export function SpeedInsights() {
  // Only render in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }
  
  return <SpeedInsightsBase />;
}
