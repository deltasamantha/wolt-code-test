export interface OpeningHours {
  day: DayType;
  slots?: TimeSlot[];
}

export interface TimeSlot {
  type: TimeSlotType;
  value: number;
}

export type TimeSlotType = "open" | "close";

export type DayType =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
