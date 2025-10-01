'use client';

import React, { useEffect, useState, useCallback } from 'react';

// Simple type for our metrics display
type MetricType = {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
};

// Type for the web-vitals module
interface WebVitalsModule {
  onCLS: (callback: (metric: any) => void, opts?: any) => void;
  onFCP: (callback: (metric: any) => void) => void;
  onLCP: (callback: (metric: any) => void, opts?: any) => void;
  onTTFB: (callback: (metric: any) => void) => void;
}
export function PerformanceMetrics() {
  const [metrics, setMetrics] = useState<MetricType[]>([]);
  const [showMetrics, setShowMetrics] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const getRating = useCallback((name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      CLS: { good: 0.1, needsImprovement: 0.25 }, // CLS is a ratio, so values are between 0 and 1
      FID: { good: 100, needsImprovement: 300 },   // FID is in milliseconds
      LCP: { good: 2500, needsImprovement: 4000 }, // LCP is in milliseconds
      FCP: { good: 1800, needsImprovement: 3000 }, // FCP is in milliseconds
      TTFB: { good: 100, needsImprovement: 600 },  // TTFB is in milliseconds
    };

    const threshold = thresholds[name] || { good: 0, needsImprovement: 1000 };

    // For CLS, lower is better
    if (name === 'CLS') {
      if (value <= threshold.good) return 'good';
      if (value <= threshold.needsImprovement) return 'needs-improvement';
      return 'poor';
    }
    
    // For all other metrics, lower is better
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    
    const loadWebVitals = async () => {
      try {
        // Import web-vitals with type assertion
        const webVitals = (await import('web-vitals')) as unknown as WebVitalsModule;
        
        // Handler for web-vitals metrics
        const handleMetric = (metric: { name: string; value: number }) => {
          setMetrics((prevMetrics) => {
            // Clean up the metric name
            const displayName = metric.name
              .replace(/^(Next\\.js-hydration-|web-vitals-)/i, '')
              .toUpperCase();
            
            // Round the value to 1 decimal place
            const roundedValue = Math.round(metric.value * 10) / 10;
            
            // Create the new metric object
            const newMetric: MetricType = {
              name: displayName,
              value: roundedValue,
              rating: getRating(displayName, metric.value),
            };

            // Update or add the metric
            const existingIndex = prevMetrics.findIndex((m) => m.name === displayName);
            if (existingIndex >= 0) {
              const newMetrics = [...prevMetrics];
              newMetrics[existingIndex] = newMetric;
              return newMetrics;
            }
            return [...prevMetrics, newMetric];
          });
        };

        // Set up web-vitals with our handler
        webVitals.onCLS(handleMetric, { reportAllChanges: true });
        webVitals.onFCP(handleMetric);
        webVitals.onLCP(handleMetric, { reportAllChanges: true });
        webVitals.onTTFB(handleMetric);
      } catch (error) {
        console.error('Failed to load web-vitals:', error);
      }
    };

    setIsClient(true);
    loadWebVitals();
  }, [getRating]);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good':
        return 'text-green-500';
      case 'needs-improvement':
        return 'text-yellow-500';
      case 'poor':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  if (process.env.NODE_ENV !== 'development' || !isClient) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShowMetrics(!showMetrics)}
        className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Toggle performance metrics"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </button>

      {showMetrics && (
        <div className="mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">Performance</h3>
            <button
              onClick={() => setShowMetrics(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            {metrics.length > 0 ? (
              metrics.map((metric) => (
                <div key={metric.name} className="text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      {metric.name}:
                    </span>
                    <span className={`font-medium ${getRatingColor(metric.rating)}`}>
                      {metric.value} {metric.name === 'CLS' ? '' : 'ms'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-1">
                    <div
                      className={`h-1.5 rounded-full ${getRatingColor(metric.rating).replace('text-', 'bg-')}`}
                      style={{
                        width: `${Math.min(100, (metric.value / (metric.name === 'CLS' ? 0.5 : 1000)) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">Loading metrics...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
