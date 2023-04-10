import {StyleSheet} from "react-native";

import theme from "../../theme/theme";

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "column",
    backgroundColor: theme.colors.colorWhite,
    paddingTop: theme.spacing.lg,
    borderTopStartRadius: theme.borderRadius.md,
    borderTopEndRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.lg,
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

export const storyStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.colorBackground,
    justifyContent: "center",
  },
});
