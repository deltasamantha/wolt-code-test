import {StyleSheet} from "react-native";

import theme from "../../theme/theme";

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
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
