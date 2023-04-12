import {render, cleanup, screen} from "@testing-library/react-native";

import ListSeparator from "../ListSeparator";

afterEach(cleanup);

describe("ListSeparator", () => {
  it("Should render ListHeader properly", () => {
    const {toJSON} = render(<ListSeparator />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Should render divider", () => {
    render(<ListSeparator />);
    const divider = screen.getByTestId("divider");
    expect(divider).toBeTruthy();
  });
});
