import {getStorybookUI} from "@storybook/react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {styles} from "../App.styles";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import "./storybook.requires";
import {useCallback} from "react";

const StorybookUIRoot = getStorybookUI({});

export default () => {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaProvider style={styles.rootView} onLayout={onLayoutRootView}>
      <StorybookUIRoot />
    </SafeAreaProvider>
  );
};
