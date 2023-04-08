import {StyleSheet} from "react-native";

import theme from "../../theme/theme";

const LIST_FOOTER_HEIGHT = 20;

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.colorBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    minWidth: "90%",
    maxHeight: "70%",
    height: "auto",
    minHeight: "30%",
    alignSelf: "center",
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
  },
  listContent: {
    backgroundColor: theme.colors.colorWhite,
    paddingHorizontal: theme.spacing.lg,
    shadowColor: theme.colors.colorDark,
    shadowOffset: {width: theme.shadowOffset.sm, height: theme.shadowOffset.md},
    shadowOpacity: theme.opacity.shadow,
    shadowRadius: theme.shadowRadius.sm,
    borderRadius: theme.borderRadius.md,
  },
  listFooter: {
    backgroundColor: theme.colors.colorWhite,
    borderBottomStartRadius: theme.borderRadius.md,
    borderBottomEndRadius: theme.borderRadius.md,
    height: LIST_FOOTER_HEIGHT,
  },
});
