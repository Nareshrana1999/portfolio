module.exports = {
  // Directories to process
  input: [
    'public/images',
    'public/assets',
  ],
  
  // Output directory for optimized images
  output: 'public/optimized',
  
  // Image formats to optimize
  formats: ['jpg', 'jpeg', 'png', 'webp', 'avif'],
  
  // Image quality (1-100)
  quality: 80,
  
  // Resize options
  resize: {
    // Enable/disable resizing
    enabled: true,
    
    // Widths to generate (in pixels)
    widths: [320, 480, 768, 1024, 1280, 1600, 1920],
    
    // Height will be calculated to maintain aspect ratio
    // Set to a number to force a specific height
    height: null,
    
    // Crop strategy: 'cover', 'contain', 'fill', 'inside', 'outside'
    fit: 'cover',
    
    // Position for cropping: 'top', 'right top', 'right', etc.
    position: 'center',
  },
  
  // WebP options
  webp: {
    quality: 80,
    lossless: false,
    force: true,
  },
  
  // AVIF options
  avif: {
    quality: 60,
    lossless: false,
    effort: 4,
  },
  
  // Skip files larger than this size (in bytes)
  skipLargerThan: 10 * 1024 * 1024, // 10MB
  
  // Skip files that already have an optimized version
  skipExisting: true,
  
  // Logging options
  logging: {
    // Log progress
    progress: true,
    
    // Log skipped files
    skipped: true,
    
    // Log errors
    errors: true,
  },
};
