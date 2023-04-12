import React from "react";
import {View} from "react-native";
import Animated, {ComplexAnimationBuilder} from "react-native-reanimated";

import {styles} from "./ListItem.styles";
import locale from "../../config/Locale";
import {DayType} from "../../models/OpeningHours";
import {Slot} from "../../models/TimeSlot";
import AppText from "../AppText/AppText";
import SlotsList from "../SlotsList/SlotsList";

/**
 * Prop definition for ListItem component
 */
export interface Props {
  /**
   * day to be shown in the item, one of
   * ```"monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"```
   */
  day: DayType;
  /**
   * ```{open: number; close?: number;}[]```
   */
  slots: Slot[];
  isToday?: boolean;
  entering?: ComplexAnimationBuilder;
}

/**
 * ### ListItem component
 * -------------
 * @description Component to list down opening time slots against the dates
 */
const ListItem: React.FC<Props> = ({day, slots, isToday, entering}: Props) => {
  return (
    <Animated.View style={styles.rootContainer} entering={entering}>
      <View style={styles.dateContainer}>
        <AppText size="m" type="semiBold">
          {locale.weekDay[day]}
        </AppText>
        {isToday && (
          <AppText
            size="s"
            type="bold"
            color="accent"
            style={styles.todayIndicator}>
            {locale.today.toUpperCase()}
          </AppText>
        )}
      </View>
      <SlotsList slots={slots} />
    </Animated.View>
  );
};

export default ListItem;
