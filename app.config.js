module.exports = {
  expo: {
    name: "CodingTest",
    slug: "CodingTest",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ABD6EA",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ABD6EA",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
  },
};
