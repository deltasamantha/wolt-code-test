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
      backgroundColor: "#D9D9D9",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#D9D9D9",
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
