import {render, cleanup, screen} from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";

import theme from "../../../theme/theme";
import AppText from "../AppText";

afterEach(cleanup);

describe("AppText", () => {
  it("Should render AppText properly", () => {
    const sampleText = "Code test";
    const {toJSON} = render(<AppText>{sampleText}</AppText>);
    const text = screen.getByText(sampleText);
    expect(text.props.children).toBeDefined();
    expect(text.props.children).toEqual(sampleText);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Should render dark color variant", () => {
    const sampleText = "Code test";
    const color = theme.colors.colorDark;
    render(<AppText color="dark">{sampleText}</AppText>);
    const text = screen.getByText(sampleText);
    expect(text).toBeDefined();
    expect(text).toHaveTextContent(sampleText);
    expect(text).toHaveStyle({
      color,
    });
  });

  it("Should render light color variant", () => {
    const sampleText = "Code test";
    const color = theme.colors.colorLight;
    render(<AppText color="light">{sampleText}</AppText>);
    const text = screen.getByText(sampleText);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      color,
    });
  });

  it("Should render accent color variant", () => {
    const sampleText = "Code test";
    const color = theme.colors.colorAccent;
    render(<AppText color="accent">{sampleText}</AppText>);
    const text = screen.getByText(sampleText);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      color,
    });
  });

  it("Should render custom color color variant", () => {
    const sampleText = "Code test";
    const color = "#FB7185";
    render(<AppText color={color}>{sampleText}</AppText>);
    const text = screen.getByText(sampleText);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      color,
    });
  });

  it("Should render small font size variant", () => {
    const sampleText = "Code test";
    const fontSize = theme.fontSize.small;
    render(<AppText size="s">{sampleText}</AppText>);
    const text = screen.getByText(sampleText);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      fontSize,
    });
  });

  it("Should render medium font size variant", () => {
    const sampleText = "Code test";
    const fontSize = theme.fontSize.medium;
    render(<AppText size="m">{sampleText}</AppText>);
    const text = screen.getByText(sampleText);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      fontSize,
    });
  });

  it("Should render large font size variant", () => {
    const sampleText = "Code test";
    const fontSize = theme.fontSize.large;
    render(<AppText size="l">{sampleText}</AppText>);
    const text = screen.getByText(sampleText);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      fontSize,
    });
  });

  it("Should render regular font variant", () => {
    const sampleText = "Code test";
    const fontFamily = theme.fontFamily.regular;
    render(<AppText type="regular">{sampleText}</AppText>);
    const text = screen.getByText(sampleText);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      fontFamily,
    });
  });

  it("Should render semi bold font variant", () => {
    const sampleText = "Code test";
    const fontFamily = theme.fontFamily.semiBold;
    render(<AppText type="semiBold">{sampleText}</AppText>);
    const text = screen.getByText(sampleText);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      fontFamily,
    });
  });

  it("Should render bold font variant", () => {
    const sampleText = "Code test";
    const fontFamily = theme.fontFamily.bold;
    render(<AppText type="bold">{sampleText}</AppText>);
    const text = screen.getByText(sampleText);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      fontFamily,
    });
  });

  it("Should render bold large light variant", () => {
    const sampleText = "Code test";
    const fontFamily = theme.fontFamily.bold;
    const color = theme.colors.colorLight;
    const fontSize = theme.fontSize.large;
    render(
      <AppText type="bold" size="l" color="light">
        {sampleText}
      </AppText>,
    );
    const text = screen.getByText(sampleText);
    expect(text).toBeDefined();
    expect(text).toHaveStyle({
      fontFamily,
      color,
      fontSize,
    });
  });
});
