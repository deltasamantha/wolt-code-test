import dayjs from "dayjs";

import {DATE_NAME_FORMAT, maxSeconds} from "../config/DateTimeConfig";
import locale from "../config/Locale";

/**
 * Format the open and close time to be shown in the time slots
 *
 * @param openingTime - opening time in seconds
 * @param closingTime - closing time in seconds, if not provided it takes as 0
 * @returns formatted timestamp of opening and closing time
 */
export const getTimeSlotTimeStamp = (
  openingTime: number,
  closingTime?: number,
) => {
  try {
    return `${getTimeStamp(openingTime)} - ${getTimeStamp(closingTime ?? 0)}`;
  } catch (error) {
    console.log("error", error);
    return locale.invalidSlot;
  }
};

/**
 * Format number of seconds in to a time stamp in format hh:mm AM/PM or hh AM/PM
 *
 * @param seconds - time in seconds, max is 86399
 * @returns formatted time stamp
 */
export const getTimeStamp = (seconds: number) => {
  if (seconds > maxSeconds) {
    throw new Error("Invalid seconds value");
  }
  const {hours, minutes} = getHoursAndMinutes(seconds);
  return `${format12Hours(hours)}${padZero(minutes)} ${getTimestampSuffix(
    hours,
  )}`;
};

export const getHoursAndMinutes = (seconds: number) => {
  return {
    hours: Math.trunc(seconds / (60 * 60)),
    minutes: Math.trunc((seconds % (60 * 60)) / 60),
  };
};

export const getTimestampSuffix = (hours: number) => {
  return hours >= 11 ? locale.pm : locale.am;
};

export const format12Hours = (hours: number) => {
  return hours > 12 ? `${hours - 12}` : `${hours}`;
};

export const padZero = (num: number) => {
  return num === 0 ? "" : num < 10 ? `:0${num}` : `:${num}`;
};

/**
 * Get today name
 *
 * @returns today name in lowercase
 */
export const getTodayDay = () => {
  return dayjs().format(DATE_NAME_FORMAT).toLowerCase();
};
