import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const formatTime = (seconds: number) => {
  const time = get24HoursTime(seconds * 1000);
  const [hours, minutes] = time.split(":");
  const hoursCount = parseInt(hours, 10);
  if (hoursCount > 12) {
    return `${hoursCount - 12}:${minutes} PM`;
  } else {
    return `${hoursCount}:${minutes} AM`;
  }
};

export const get24HoursTime = (milliseconds: number) => {
  return dayjs.duration(milliseconds, "millisecond").format("HH:mm");
};

export const getTodayDay = () => {
  return dayjs().format("dddd").toLowerCase();
};
