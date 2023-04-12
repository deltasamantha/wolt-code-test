import {setupOpeningHoursData} from "./DataUtils";
import {DisplayTimeSlot} from "../models/DisplayTimeSlot";

describe("setupOpeningHoursData", () => {
  test("Get display time slots array from JSON object", () => {
    const data = {
      monday: [],
      tuesday: [
        {type: "open", value: 36000},
        {type: "close", value: 64800},
      ],
      wednesday: [],
      thursday: [
        {type: "open", value: 36000},
        {type: "close", value: 64800},
      ],
    };
    const monday: DisplayTimeSlot = {day: "monday", slots: []};
    const tuesday: DisplayTimeSlot = {
      day: "tuesday",
      slots: [{open: 36000, close: 64800}],
    };
    const formattedData = setupOpeningHoursData(data);

    expect(formattedData).toBeDefined();
    expect(formattedData).toContainEqual(monday);
    expect(formattedData).toContainEqual(tuesday);
  });
});
