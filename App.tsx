/**
 * @author Samantha Withanage
 * @version 1.0.0
 * @description Code test - Assignment from Wolt - Senior React Native Engineer, Courier Group
 */

import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {StatusBar} from "expo-status-bar";
import {useCallback} from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";

import {styles} from "./App.styles";
import StorybookSwitch from "./components/StorybookSwitch/StorybookSwitch";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.rootView} onLayout={onLayoutRootView}>
      <StatusBar style="dark" />
      <StorybookSwitch>
        <HomeScreen />
      </StorybookSwitch>
    </SafeAreaProvider>
  );
};

export default App;
