import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock LayoutAnimation
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  
  RN.LayoutAnimation = {
    configureNext: jest.fn(),
    create: jest.fn(),
    Types: {
      easeInEaseOut: 'easeInEaseOut',
      easeIn: 'easeIn',
      easeOut: 'easeOut',
      keyboard: 'keyboard',
    },
    Properties: {
      opacity: 'opacity',
      scaleX: 'scaleX',
      scaleY: 'scaleY',
      scaleXY: 'scaleXY',
    },
  };

  return RN;
});