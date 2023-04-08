import {DayType} from "./OpeningHours";

export interface Slot {
  open: number;
  close?: number;
}

export interface DisplayTimeSlot {
  day: DayType;
  slots: Slot[];
}
