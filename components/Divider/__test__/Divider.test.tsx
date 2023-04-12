import {render, cleanup, screen} from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";

import theme from "../../../theme/theme";
import Divider from "../Divider";

afterEach(cleanup);

describe("Divider", () => {
  it("Should render Divider properly", () => {
    const {toJSON} = render(<Divider />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Should render dark variant", () => {
    const color = theme.colors.colorDark;
    render(<Divider type="dark" />);
    const divider = screen.getByTestId("divider");
    expect(divider).toBeTruthy();
    expect(divider).toHaveStyle({
      backgroundColor: color,
    });
  });

  it("Should render light variant", () => {
    const color = theme.colors.colorExtraLight;
    render(<Divider type="light" />);
    const divider = screen.getByTestId("divider");
    expect(divider).toBeTruthy();
    expect(divider).toHaveStyle({
      backgroundColor: color,
    });
  });
});
