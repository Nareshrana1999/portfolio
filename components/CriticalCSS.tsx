import React from 'react';
import { readFileSync } from 'fs';
import { join } from 'path';

interface CriticalCSSProps {
  path?: string;
  css?: string;
}

export function CriticalCSS({ path, css }: CriticalCSSProps) {
  let criticalCSS = css;

  // If no CSS is provided but a path is, try to read the CSS file
  if (!criticalCSS && path && typeof window === 'undefined') {
    try {
      criticalCSS = readFileSync(join(process.cwd(), path), 'utf8');
    } catch (error) {
      console.error(`Failed to load critical CSS from ${path}:`, error);
    }
  }

  if (!criticalCSS) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: criticalCSS,
      }}
    />
  );
}
