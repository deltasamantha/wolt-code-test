/**
 * Time slot shape
 */
export interface TimeSlot {
  type: TimeSlotType;
  value: number;
}

/**
 * Time slot types
 */
export type TimeSlotType = "open" | "close";

/**
 * Date name types
 */
export type DayType =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
