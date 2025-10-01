const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;

module.exports = (config, { isServer, dev }) => {
  // Only run the bundle analyzer when ANALYZE=true is set
  if (ANALYZE) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: `../.next/analyze/${isServer ? 'server' : 'client'}.html`,
        openAnalyzer: false,
      })
    );
  }

  // Add optimization for production builds
  if (!dev) {
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 10,
        maxAsyncRequests: 10,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|framer-motion)[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    };
  }

  // Add file loader for images
  config.module.rules.push({
    test: /\.(png|jpe?g|webp|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          outputPath: 'static/media',
          name: '[name].[hash].[ext]',
        },
      },
    ],
  });

  return config;
};
