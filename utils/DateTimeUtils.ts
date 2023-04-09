import dayjs from "dayjs";

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
  return `${getTimeStamp(openingTime)} - ${getTimeStamp(closingTime ?? 0)}`;
};

/**
 * Format number of seconds in to a time stamp in format hh:mm AM/PM or hh AM/PM
 *
 * @param seconds - time in seconds
 * @returns formatted time stamp
 */
export const getTimeStamp = (seconds: number) => {
  const {hours, minutes} = getHoursAndMinutes(seconds);
  return `${format12Hours(hours)}${padZero(minutes)} ${getTimestampSuffix(
    hours,
  )}`;
};

const getHoursAndMinutes = (seconds: number) => {
  return {
    hours: Math.trunc(seconds / (60 * 60)),
    minutes: Math.trunc((seconds % (60 * 60)) / 60),
  };
};

const getTimestampSuffix = (hours: number) => {
  return hours >= 11 ? "PM" : "AM";
};

const format12Hours = (hours: number) => {
  return hours > 12 ? `${hours - 12}` : `${hours}`;
};

function padZero(num: number) {
  return num === 0 ? "" : num < 10 ? `:0${num}` : `:${num}`;
}

/**
 * Get today name
 *
 * @returns today name in lowercase
 */
export const getTodayDay = () => {
  return dayjs().format("dddd").toLowerCase();
};
