import {getDividerColor} from "./DividerUtils";
import theme from "../theme/theme";

describe("getDividerColor", () => {
  let lightColor: string;
  let darkColor: string;

  beforeAll(() => {
    lightColor = theme.colors.colorExtraLight;
    darkColor = theme.colors.colorDark;
  });

  test("Color for divider type light", () => {
    expect(getDividerColor("light")).toBe(lightColor);
  });

  test("Color for divider type dark", () => {
    expect(getDividerColor("dark")).toBe(darkColor);
  });
});
