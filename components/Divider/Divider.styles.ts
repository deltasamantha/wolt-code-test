import {StyleSheet} from "react-native";

import theme from "../../theme/theme";

const DIVIDER_HEIGHT = 1;

export const styles = StyleSheet.create({
  divider: {
    height: DIVIDER_HEIGHT,
    width: "100%",
  },
});

export const storyStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.colorBackground,
    justifyContent: "center",
  },
});
