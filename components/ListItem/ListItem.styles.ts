import {StyleSheet} from "react-native";

import theme from "../../theme/theme";

export const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: theme.colors.colorWhite,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  todayIndicator: {
    paddingStart: theme.spacing.md,
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
