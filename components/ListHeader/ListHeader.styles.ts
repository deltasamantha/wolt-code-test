import {StyleSheet} from "react-native";

import theme from "../../theme/theme";

const CLOCK_ICON_SIZE = 30;

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
    paddingBottom: theme.spacing.md,
  },
  title: {
    marginLeft: theme.spacing.md,
  },
  clock: {
    width: CLOCK_ICON_SIZE,
    height: CLOCK_ICON_SIZE,
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
