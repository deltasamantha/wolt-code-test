import {
  format12Hours,
  getHoursAndMinutes,
  getTimeSlotTimeStamp,
  getTimeStamp,
  getTimestampSuffix,
  getTodayDay,
  padZero,
} from "./DateTimeUtils";
import {
  AM_PM_REGEX,
  DURATION_TIME_STAMP_REGEX,
  TIME_STAMP_REGEX,
  WEEK_DAY_REGEX,
} from "../config/DateTimeConfig";

describe("getTodayDay", () => {
  test("Get today day", () => {
    const day = getTodayDay();
    expect(day).toBeDefined();
    expect(day).not.toBeNull();
    expect(day).toMatch(WEEK_DAY_REGEX);
  });

  describe("Test getTodayDay on 2023-04-10 to be monday", () => {
    beforeAll(() => {
      jest.useFakeTimers().setSystemTime(new Date("2023-04-10"));
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    test("2023-04-10 to be monday", () => {
      const day = getTodayDay();
      expect(day).toBeDefined();
      expect(day).not.toBeNull();
      expect(day).toMatch("monday");
    });
  });
});

describe("padZero", () => {
  test("Get empty string for 0", () => {
    const count = 0;
    const value = padZero(count);
    expect(value).toBeDefined();
    expect(value).not.toBe(":00");
    expect(value).toBe("");
  });

  test("Add a :0 before the number if the number is single digit", () => {
    const count1 = 1;
    const count2 = 9;
    const value1 = padZero(count1);
    const value2 = padZero(count2);
    expect(value1).not.toBe("");
    expect(value1).toBe(`:0${count1}`);
    expect(value2).not.toBe("");
    expect(value2).toBe(`:0${count2}`);
  });

  test("Add a : before the number if the number is not single digit", () => {
    const count = 20;
    const value = padZero(count);
    expect(value).not.toBe("");
    expect(value).not.toBe(`:0${count}`);
    expect(value).toBe(`:${count}`);
  });
});

describe("format12Hours", () => {
  test("Get same value in string if the hour value is less than or equal 12", () => {
    const hour = 10;
    const hour2 = 12;
    const hourValue = format12Hours(hour);
    const hourValue2 = format12Hours(hour2);
    expect(hourValue).toBeDefined();
    expect(hourValue).toBe(`${hour}`);
    expect(hourValue2).toBeDefined();
    expect(hourValue2).toBe(`${hour2}`);
    expect(hourValue2).not.toBe(`${hour2 - 12}`);
  });

  test("Get 24 hour value in string if the hour value is exceeding 12", () => {
    const hour = 18;
    const hourValue = format12Hours(hour);
    expect(hourValue).toBeDefined();
    expect(hourValue).not.toBe(`${hour}`);
    expect(hourValue).toBe(`${hour - 12}`);
  });
});

describe("getTimestampSuffix", () => {
  test("Get AM if the hour value is less than 12", () => {
    const hour = 10;
    const hour2 = 12;
    const suffix = getTimestampSuffix(hour);
    const suffix2 = getTimestampSuffix(hour2);
    expect(suffix).toBe("AM");
    expect(suffix).not.toBe("PM");
    expect(suffix).toMatch(AM_PM_REGEX);
    expect(suffix2).not.toBe("AM");
    expect(suffix2).toBe("PM");
    expect(suffix2).toMatch(AM_PM_REGEX);
  });

  test("Get PM if the hour value is exceeding or equal 12", () => {
    const hour = 12;
    const hour2 = 18;
    const suffix = getTimestampSuffix(hour);
    const suffix2 = getTimestampSuffix(hour2);
    expect(suffix).toBe("PM");
    expect(suffix).not.toBe("AM");
    expect(suffix).toMatch(AM_PM_REGEX);
    expect(suffix2).toBe("PM");
    expect(suffix2).not.toBe("AM");
    expect(suffix2).toMatch(AM_PM_REGEX);
  });
});

describe("getHoursAndMinutes", () => {
  test("Get hours and minutes for a given seconds", () => {
    const seconds = 64800;
    const result = {hours: 18, minutes: 0};
    const hoursAndMinutes = getHoursAndMinutes(seconds);
    expect(hoursAndMinutes).toBeDefined();
    expect(hoursAndMinutes).toEqual(result);
    expect(hoursAndMinutes).toMatchObject(result);
  });
});

describe("getTimeStamp", () => {
  test("Get time stamp for given seconds", () => {
    const seconds = 64800;
    const timeStamp = getTimeStamp(seconds);
    expect(timeStamp).toBeDefined();
    expect(timeStamp).toMatch(TIME_STAMP_REGEX);
  });

  test("Get exception if seconds exceeds 86399", () => {
    const seconds = 90000;
    expect(() => getTimeStamp(seconds)).toThrow("Invalid seconds value");
  });
});

describe("getTimeSlotTimeStamp", () => {
  test("Get timestamp for time slot", () => {
    const openingTime = 64800;
    const closingTime = 72000;
    const timeStamp = getTimeSlotTimeStamp(openingTime, closingTime);
    expect(timeStamp).toMatch(DURATION_TIME_STAMP_REGEX);
    expect(timeStamp).toBeTruthy();
  });

  test("Give exception if one of the seconds exceeds 86399", () => {
    const openingTime = 64800;
    const closingTime = 90000;
    expect(() => getTimeSlotTimeStamp(openingTime, closingTime)).toThrow(
      "Invalid seconds value",
    );
  });
});
