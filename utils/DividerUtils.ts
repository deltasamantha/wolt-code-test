import {DividerType} from "../components/Divider/Divider";
import theme from "../theme/theme";

export const getDividerColor = (type: DividerType) => {
  switch (type) {
    case "light":
      return theme.colors.colorExtraLight;
    case "dark":
      return theme.colors.colorDark;
  }
};
