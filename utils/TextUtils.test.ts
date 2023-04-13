import {
  getFontColor,
  getFontFamily,
  getFontLineHeight,
  getFontSize,
} from "./TextUtils";
import theme from "../theme/theme";

describe("getFontSize", () => {
  let fontSizeSmall: number;
  let fontSizeMedium: number;
  let fontSizeLarge: number;

  beforeAll(() => {
    fontSizeSmall = theme.fontSize.small;
    fontSizeMedium = theme.fontSize.medium;
    fontSizeLarge = theme.fontSize.large;
  });

  test("Font size for text size type s", () => {
    expect(getFontSize("s")).toBe(fontSizeSmall);
  });

  test("Font size for text size type m", () => {
    expect(getFontSize("m")).toBe(fontSizeMedium);
  });

  test("Font size for text size type l", () => {
    expect(getFontSize("l")).toBe(fontSizeLarge);
  });
});

describe("getFontLineHeight", () => {
  let fontLineHeightSmall: number;
  let fontLineHeightMedium: number;
  let fontLineHeightLarge: number;

  beforeAll(() => {
    fontLineHeightSmall = theme.fontLineHeight.small;
    fontLineHeightMedium = theme.fontLineHeight.medium;
    fontLineHeightLarge = theme.fontLineHeight.large;
  });

  test("Text line height for text size type s", () => {
    expect(getFontLineHeight("s")).toBe(fontLineHeightSmall);
  });

  test("Text line height for text size type m", () => {
    expect(getFontLineHeight("m")).toBe(fontLineHeightMedium);
  });

  test("Text line height for text size type l", () => {
    expect(getFontLineHeight("l")).toBe(fontLineHeightLarge);
  });
});

describe("getFontFamily", () => {
  test("Font face for text type regular", () => {
    const fontFamily = theme.fontFamily.regular;
    expect(getFontFamily("regular")).toBe(fontFamily);
  });

  test("Font face for text type semiBold", () => {
    const fontFamily = theme.fontFamily.semiBold;
    expect(getFontFamily("semiBold")).toBe(fontFamily);
  });

  test("Font face for text type bold", () => {
    const fontFamily = theme.fontFamily.bold;
    expect(getFontFamily("bold")).toBe(fontFamily);
  });
});

describe("getFontColor", () => {
  let colorLight: string;
  let colorDark: string;
  let colorAccent: string;
  const colorCustom = "#FB7185";

  beforeAll(() => {
    colorLight = theme.colors.colorLight;
    colorDark = theme.colors.colorDark;
    colorAccent = theme.colors.colorAccent;
  });

  test("Font color for text color type light", () => {
    expect(getFontColor("light")).toBe(colorLight);
  });

  test("Font color for text color type dark", () => {
    expect(getFontColor("dark")).toBe(colorDark);
  });

  test("Font color for text color type accent", () => {
    expect(getFontColor("accent")).toBe(colorAccent);
  });

  test("Font color for custom color", () => {
    expect(getFontColor(colorCustom)).toBeDefined();
    expect(getFontColor(colorCustom)).toBe(colorCustom);
  });
});
