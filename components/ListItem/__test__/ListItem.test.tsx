import {render, cleanup, screen} from "@testing-library/react-native";

import {slotsData} from "./mockedData";
import locale from "../../../config/Locale";
import ListItem from "../ListItem";

beforeEach(() => {
  jest.useFakeTimers();
  jest.mock("react-native-reanimated");
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  cleanup();
});

describe("ListItem", () => {
  it("Should render ListItem properly", async () => {
    jest.useFakeTimers();
    const {toJSON} = await render(<ListItem day="monday" slots={[]} />);
    jest.advanceTimersByTime(600);
    expect(toJSON()).toMatchSnapshot();
  });

  it("ListItem should have a week day", () => {
    jest.useFakeTimers();
    const mondayText = locale.weekDay.monday;
    render(<ListItem day="monday" slots={[]} />);
    jest.advanceTimersByTime(600);
    const dayIndicatorText = screen.getByText(mondayText);
    expect(dayIndicatorText.props.children).toBeDefined();
    expect(dayIndicatorText.props.children).toEqual(mondayText);
  });

  it("ListItem should have a no slots indicator in case no slots available", () => {
    const closedText = locale.closed;
    render(<ListItem day="monday" slots={[]} />);
    const closedIndicatorText = screen.getByText(closedText);
    expect(closedIndicatorText).toBeDefined();
    expect(closedIndicatorText.props.children).toEqual(closedText);
  });

  it("ListItem should have today indicator for today", () => {
    const todayText = locale.today.toUpperCase();
    render(<ListItem day="monday" slots={[]} isToday />);
    const todayIndicatorText = screen.getByText(todayText);
    expect(todayIndicatorText.props.children).toBeDefined();
    expect(todayIndicatorText.props.children).toEqual(todayText);
  });

  it("ListItem should have slots if slots available", () => {
    render(<ListItem day="monday" slots={slotsData} isToday />);
    const slots = screen.getAllByText("PM", {exact: false});
    expect(slots).toBeTruthy();
    expect(slots.length).toBe(2);
  });
});
