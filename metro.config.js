const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

const { assetExts } = config.resolver;
config.resolver.assetExts = assetExts.filter(ext => ext !== "svg");
config.resolver.sourceExts.push("svg");

config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

module.exports = withNativeWind(config, { input: './src/styles/global.css' });