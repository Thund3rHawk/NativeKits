module.exports = {
  dependencies: {
    'react-native-reanimated': {
      platforms: {
        android: {
          sourceDir: '../node_modules/react-native-reanimated/android',
          packageImportPath: 'import io.reactivex.functions.Function;',
        },
        ios: {},
      },
    },
  },
};