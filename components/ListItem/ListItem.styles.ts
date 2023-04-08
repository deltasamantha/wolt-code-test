import {StyleSheet} from "react-native";

import theme from "../../theme/theme";

export const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: theme.spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  todayIndicator: {
    paddingStart: theme.spacing.md,
  },
});
