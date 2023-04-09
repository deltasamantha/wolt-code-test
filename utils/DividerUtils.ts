import {DividerType} from "../components/Divider/Divider";
import theme from "../theme/theme";

/**
 * Get the color value (HEX) for divider type
 *
 * @param type - Divider type
 * @returns Color value incorporate with the divider type
 */
export const getDividerColor = (type: DividerType) => {
  switch (type) {
    case "light":
      return theme.colors.colorExtraLight;
    case "dark":
      return theme.colors.colorDark;
  }
};
