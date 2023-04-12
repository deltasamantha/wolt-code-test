import {render, cleanup, screen} from "@testing-library/react-native";

import CoverBoardItem from "../CoverBoardItem";

afterEach(cleanup);

describe("CoverBoardItem", () => {
  it("Should render CoverBoardItem properly", () => {
    const {toJSON} = render(
      <CoverBoardItem
        source={require("../../../assets/images/food-plate-top.png")}
        originX={0}
        originY={0}
        destinationX={10}
        destinationY={10}
        style={{width: 100, height: 100}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("Should contains an Image component", () => {
    render(
      <CoverBoardItem
        source={require("../../../assets/images/food-plate-top.png")}
        originX={0}
        originY={0}
        destinationX={10}
        destinationY={10}
        style={{width: 100, height: 100}}
      />,
    );
    const imageItem = screen.getByTestId("board-item", {exact: false});
    expect(imageItem).toBeTruthy();
  });
});
