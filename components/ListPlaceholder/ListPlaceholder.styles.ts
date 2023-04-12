import {StyleSheet} from "react-native";

import theme from "../../theme/theme";

const MIN_HEIGHT = 200;

export const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: theme.colors.colorWhite,
    minHeight: MIN_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
});
