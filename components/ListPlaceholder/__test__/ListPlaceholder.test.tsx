import {render, cleanup, screen} from "@testing-library/react-native";

import locale from "../../../config/Locale";
import ListPlaceholder from "../ListPlaceholder";

afterEach(cleanup);

describe("ListPlaceholder", () => {
  it("Should render ListItem properly", () => {
    const {toJSON} = render(<ListPlaceholder />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("ListItem should have placeholder text", () => {
    const placeholder = locale.slotListPlaceholder;
    render(<ListPlaceholder />);
    const placeholderText = screen.getByText(placeholder);
    expect(placeholderText.props.children).toBeDefined();
    expect(placeholderText.props.children).toEqual(placeholder);
  });
});
