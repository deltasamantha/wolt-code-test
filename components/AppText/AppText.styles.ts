import {StyleSheet} from "react-native";

import theme from "../../theme/theme";

export const storyStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.colorWhite,
    justifyContent: "center",
    alignItems: "center",
  },
});
