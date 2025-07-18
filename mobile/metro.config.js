const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// SVG support
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
config.resolver.sourceExts.push("svg");

// Make sure fonts like .ttf are still in assetExts
config.resolver.assetExts.push("ttf");

// Use SVG transformer
config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

// Wrap with NativeWind
module.exports = withNativeWind(config, { input: "./global.css" });
