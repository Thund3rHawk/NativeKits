const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Set project root to the example directory
config.projectRoot = __dirname;

// Add the parent directory to watch folders so Metro can find your library
config.watchFolders = [
  __dirname,                          // Example app
  path.resolve(__dirname, '../'),     // Root directory (your library)
];

// Configure resolver to find your library
config.resolver.alias = {
  'nativekits': path.resolve(__dirname, '../src'),
};

// Ensure Metro can resolve modules from both directories
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '../node_modules'),
];

module.exports = config;