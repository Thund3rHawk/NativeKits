module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    "module:metro-react-native-babel-preset",
  ],
  plugins: ["react-native-worklets/plugin"],
};


// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };