import {render, cleanup, screen} from "@testing-library/react-native";

import CoverBoard from "../CoverBoard";

afterEach(cleanup);

describe("CoverBoard", () => {
  it("Should render CoverBoard properly", () => {
    const {toJSON} = render(<CoverBoard />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Should contains Images", () => {
    render(<CoverBoard />);
    const imageItems = screen.getAllByTestId("board-item", {exact: false});
    expect(imageItems).toBeTruthy();
    expect(imageItems.length).toBe(3);
  });
});
