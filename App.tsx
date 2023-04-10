/**
 * @author Samantha Withanage
 */

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import {StatusBar} from "expo-status-bar";
import {useCallback} from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";

import StorybookUIRoot from "./.storybook/index";
import {styles} from "./App.styles";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

const App: React.FC = () => {
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
      <StatusBar style="dark" />
      <HomeScreen />
    </SafeAreaProvider>
  );
};

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled) {
  AppEntryPoint = StorybookUIRoot;
}

export default AppEntryPoint;
