import {StyleSheet} from "react-native";

import theme from "../../theme/theme";

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "column",
    backgroundColor: theme.colors.colorWhite,
    paddingTop: theme.spacing.lg,
    borderTopStartRadius: theme.borderRadius.md,
    borderTopEndRadius: theme.borderRadius.md,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: theme.spacing.sm,
  },
  title: {
    marginLeft: theme.spacing.md,
  },
  clock: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.colorLight,
  },
});
