export const maxSeconds = 86399;

export const WEEK_DAY_REGEX = /(mon|tues|wednes|thurs|fri|satur|sun)day/g;

export const AM_PM_REGEX = /[AP][M]/gm;

export const TIME_STAMP_REGEX =
  /((1[0-9]|0?[1-9])(:([0-5][0-9])) ([AaPp][Mm])?|(1[0-9]|0?[1-9]) ([AaPp][Mm]))/gm;

export const DURATION_TIME_STAMP_REGEX =
  /\d{1,2}\s{0,2}([AaPp][Mm])\s{0,2}(-)\s{0,2}\d{1,2}\s{0,2}([AaPp][Mm])/g;

export const DATE_NAME_FORMAT = "dddd";
