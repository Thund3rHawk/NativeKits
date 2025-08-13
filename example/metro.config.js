// const { getDefaultConfig } = require('expo/metro-config');
// const path = require('path');

// const config = getDefaultConfig(__dirname);

// // Set project root to the example directory
// config.projectRoot = __dirname;

// // Add parent directory to watch folders for the library
// config.watchFolders = [
//   path.resolve(__dirname, '../')
// ];

// // Configure resolver to find the library
// config.resolver.alias = {
//   'nativekits': path.resolve(__dirname, '../src'),
// };

// config.resolver.nodeModulesPaths = [
//   path.resolve(__dirname, 'node_modules'),
//   path.resolve(__dirname, '../node_modules'),
// ];

// module.exports = config;

const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Find the project root (where your main package.json is)
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../');

// Watch folders outside of the app directory
config.watchFolders = [workspaceRoot];

// Map your local library package
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Resolve modules from workspace
config.resolver.disableHierarchicalLookup = false;

// Fix for missing asset registry
config.resolver.alias = {
  'missing-asset-registry-path': require.resolve('react-native/Libraries/Image/AssetRegistry'),
};

// Ensure asset extensions are included
config.resolver.assetExts.push('bin', 'txt', 'jpg', 'png', 'json');

// **ADD THIS - Block duplicate React instances**
config.resolver.blockList = [
  // Block react and react-native in your UI library's node_modules
  new RegExp(`${path.resolve(workspaceRoot, 'src')}/node_modules/react/.*`),
  new RegExp(`${path.resolve(workspaceRoot, 'src')}/node_modules/react-native/.*`),
  // If your library is in a separate folder, block those too
  new RegExp(`${path.resolve(workspaceRoot)}/node_modules/react/.*`),
  new RegExp(`${path.resolve(workspaceRoot)}/node_modules/react-native/.*`),
];

module.exports = config;