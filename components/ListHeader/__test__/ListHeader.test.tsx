import {render, cleanup, screen} from "@testing-library/react-native";

import locale from "../../../config/Locale";
import ListHeader from "../ListHeader";

afterEach(cleanup);

describe("ListHeader", () => {
  it("Should render ListHeader properly", () => {
    const {toJSON} = render(<ListHeader />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("ListHeader should render title", () => {
    const sampleText = locale.slotsListTitle;
    render(<ListHeader />);
    const text = screen.getByText(sampleText);
    expect(text.props.children).toBeDefined();
    expect(text.props.children).toEqual(sampleText);
  });

  it("ListHeader should have divider", () => {
    render(<ListHeader />);
    const divider = screen.getByTestId("divider");
    expect(divider).toBeTruthy();
  });

  it("ListHeader should have clock image", () => {
    render(<ListHeader />);
    const divider = screen.getByTestId("clockImage");
    expect(divider).toBeTruthy();
  });
});
