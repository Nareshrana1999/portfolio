import React, { useEffect, useRef, ComponentType } from 'react';
import dynamic from 'next/dynamic';

type IdleCallbackHandle = number;
type IdleRequestOptions = {
  timeout?: number;
};

type IdleDeadline = {
  readonly didTimeout: boolean;
  timeRemaining: () => number;
};

declare global {
  interface Window {
    requestIdleCallback: (
      callback: (deadline: IdleDeadline) => void,
      opts?: IdleRequestOptions
    ) => IdleCallbackHandle;
    cancelIdleCallback: (handle: IdleCallbackHandle) => void;
  }
}

/**
 * Hook that delays the execution of a callback until the browser is idle
 */
export function useIdleCallback(
  callback: (deadline: IdleDeadline) => void, 
  deps: React.DependencyList = []
): () => void {
  const idleHandle = useRef<IdleCallbackHandle | undefined>(undefined);
  
  const cancelIdle = () => {
    if (typeof window !== 'undefined' && idleHandle.current !== undefined) {
      window.cancelIdleCallback?.(idleHandle.current);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Use requestIdleCallback if available
    if (window.requestIdleCallback) {
      idleHandle.current = window.requestIdleCallback(callback, { timeout: 1000 });
      return cancelIdle;
    }
    
    // Fallback for browsers that don't support requestIdleCallback
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        callback({
          didTimeout: false,
          timeRemaining: () => 50 // 50ms remaining
        });
      });
    }, 0);
    
    return () => clearTimeout(timer);
  }, [...deps, callback]); // Include callback in deps array

  return cancelIdle;
}

/**
 * Dynamically imports a component with a loading state
 */
type DynamicImportOptions = {
  loading?: () => React.ReactNode;
  ssr?: boolean;
};

export function dynamicImport<T>(
  importPromise: () => Promise<{ default: ComponentType<T> }>,
  options: DynamicImportOptions = {}
) {
  const { loading, ssr = false } = options;
  
  // Create a default loading component if none provided
  const DefaultLoading = () => React.createElement('div', null, 'Loading...');
  
  // Use the provided loading component or the default one
  const LoadingComponent = loading || DefaultLoading;
  
  return dynamic(importPromise, {
    loading: LoadingComponent,
    ssr,
  });
}

/**
 * Preloads an image to improve LCP
 */
export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => resolve(img);
  });
}

/**
 * Preconnects to external domains to improve performance
 */
interface PreconnectProps {
  href: string;
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
  as?: string;
  rel?: string;
}

export function Preconnect({ 
  href, 
  crossOrigin = 'anonymous',
  as = 'fetch',
  rel = 'preconnect',
}: PreconnectProps) {
  return React.createElement('link', {
    rel,
    href,
    crossOrigin,
    as
  });
}

/**
 */
interface PreloadFontProps {
  href: string;
  type?: string;
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
  as?: string;
  rel?: string;
}

export function PreloadFont({
  href,
  type = 'font/woff2',
  crossOrigin = 'anonymous',
  as = 'font',
  rel = 'preload',
}: PreloadFontProps) {
  return React.createElement('link', {
    rel,
    href,
    type,
    crossOrigin,
    as
  });
}
