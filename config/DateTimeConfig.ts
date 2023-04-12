/**
 * Maximum number of seconds that a time slot can bare
 */
export const maxSeconds = 86399;

/**
 * Date name formatter for date
 */
export const DATE_NAME_FORMAT = "dddd";

/**
 * Regular expression to match week day names
 */
export const WEEK_DAY_REGEX = /(mon|tues|wednes|thurs|fri|satur|sun)day/g;

/**
 * Regular expression to match AM or PM
 */
export const AM_PM_REGEX = /[AP][M]/gm;

/**
 * Regular expression to match time stamp used in the app
 */
export const TIME_STAMP_REGEX =
  /((1[0-9]|0?[1-9])(:([0-5][0-9])) ([AaPp][Mm])?|(1[0-9]|0?[1-9]) ([AaPp][Mm]))/gm;

/**
 * Regular expression to match time stamp ranges in the app
 */
export const DURATION_TIME_STAMP_REGEX =
  /\d{1,2}\s{0,2}([AaPp][Mm])\s{0,2}(-)\s{0,2}\d{1,2}\s{0,2}([AaPp][Mm])/g;
