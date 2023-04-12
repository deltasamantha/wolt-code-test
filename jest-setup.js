require("react-native-reanimated/lib/reanimated2/jestUtils").setUpTests();

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};
  return Reanimated;
});
