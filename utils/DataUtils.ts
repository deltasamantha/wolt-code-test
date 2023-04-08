import data from "../config/data.json";
import {JSONObject} from "../models/JSONObject";
import {DayType, TimeSlot} from "../models/OpeningHours";
import {DisplayTimeSlot, Slot} from "../models/TimeSlot";

export const getHoursData = (): DisplayTimeSlot[] => {
  return setupOpeningHoursData(data);
};

export const setupOpeningHoursData = (openingHoursData: JSONObject) => {
  try {
    const openingHours: DisplayTimeSlot[] = [];
    for (const [key, value] of Object.entries(openingHoursData)) {
      const slots = (value as unknown as TimeSlot[])
        .sort((item, nextItem) => item.value - nextItem.value)
        .reduce<Slot[]>(
          (accumulator, currentSlot: TimeSlot, currentIndex: number) => {
            if (currentIndex === 0 && currentSlot.type === "close") {
              const previousDay = openingHours.pop();
              if (previousDay) {
                const {day, slots} = previousDay;
                const lastSlot = slots.pop();
                if (lastSlot) {
                  openingHours.push({
                    day,
                    slots: [...slots, {...lastSlot, close: currentSlot.value}],
                  });
                }
              }
            } else {
              if (currentSlot.type === "open") {
                accumulator.push({open: currentSlot.value});
              } else {
                const item = accumulator.pop();
                accumulator.push({...item!, close: currentSlot.value});
              }
            }
            return accumulator;
          },
          [],
        );

      openingHours.push({
        day: key as DayType,
        slots,
      });
    }
    return openingHours;
  } catch (error) {
    console.log(error);
    return [];
  }
};
