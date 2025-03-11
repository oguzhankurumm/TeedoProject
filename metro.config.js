const { getDefaultConfig } = require('@expo/metro-config');

const { getSentryExpoConfig } = require('@sentry/react-native/metro');

const defaultConfig = getSentryExpoConfig(__dirname);
defaultConfig.resolver.sourceExts.push('cjs');

module.exports = defaultConfig;
