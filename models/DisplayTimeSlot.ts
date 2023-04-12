import {DayType} from "./TimeSlot";

/**
 * Slot shape
 */
export interface Slot {
  open: number;
  close?: number;
}

/**
 * DisplayTimeSlot shape for presenting slot data to the list
 */
export interface DisplayTimeSlot {
  day: DayType;
  slots: Slot[];
}
