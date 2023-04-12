import {render, cleanup, screen} from "@testing-library/react-native";

import {slotsData} from "./mockedData";
import locale from "../../../config/Locale";
import SlotsList from "../SlotsList";

afterEach(cleanup);

describe("SlotsList", () => {
  it("Should render SlotsList properly", () => {
    const {toJSON} = render(<SlotsList slots={[]} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Should render placeholder if no slots available", () => {
    const placeholder = locale.closed;
    render(<SlotsList slots={[]} />);
    const placeholderText = screen.getByText(placeholder);
    expect(placeholderText).toBeTruthy();
  });

  it("Should render slots", () => {
    render(<SlotsList slots={slotsData} />);
    const slots = screen.getAllByText("PM", {exact: false});
    expect(slots).toBeTruthy();
    expect(slots.length).toBe(2);
  });
});
