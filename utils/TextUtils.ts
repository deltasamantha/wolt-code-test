import {TextSizeType, TextType, TextColorType} from "../models/TextType";
import theme from "../theme/theme";

/**
 * Get the font size incorporate with the text size type
 *
 * @param type - Text size type "s" | "m" | "l"
 * @returns font size incorporate with the text size type
 */
export const getFontSize = (type: TextSizeType) => {
  switch (type) {
    case "s":
      return theme.fontSize.small;
    case "m":
      return theme.fontSize.medium;
    case "l":
      return theme.fontSize.large;
  }
};

/**
 * Get the line height incorporate with the text size type
 *
 * @param type - Text size type "s" | "m" | "l"
 * @returns font line height incorporate with the text size type
 */
export const getFontLineHeight = (type: TextSizeType) => {
  switch (type) {
    case "s":
      return theme.fontLineHeight.small;
    case "m":
      return theme.fontLineHeight.medium;
    case "l":
      return theme.fontLineHeight.large;
  }
};

/**
 * Get the font family incorporate with the text type
 *
 * @param type - text type "bold" | "semiBold" | "regular"
 * @returns font family incorporate with the text type
 */
export const getFontFamily = (type: TextType) => {
  switch (type) {
    case "regular":
      return "Roboto_400Regular";
    case "semiBold":
      return "Roboto_500Medium";
    case "bold":
      return "Roboto_700Bold";
  }
};

/**
 * Get the font color incorporate with the text color type
 *
 * @param color - text color type
 * @returns font color incorporate with the text color type or the color passed in
 */
export const getFontColor = (color: TextColorType) => {
  switch (color) {
    case "light":
      return theme.colors.colorLight;
    case "dark":
      return theme.colors.colorDark;
    case "accent":
      return theme.colors.colorAccent;
    default:
      return color;
  }
};
