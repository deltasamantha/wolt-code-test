import {TextSizeType, TextType, TextColorType} from "../models/TextType";
import theme from "../theme/theme";

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

export const getFontColor = (color: TextColorType) => {
  switch (color) {
    case "light":
      return theme.colors.fontColorLight;
    case "dark":
      return theme.colors.fontColorDark;
    case "accent":
      return theme.colors.colorAccent;
    default:
      return color;
  }
};
