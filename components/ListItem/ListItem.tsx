import React from "react";
import {View} from "react-native";

import {styles} from "./ListItem.styles";
import locale from "../../config/Locale";
import {DayType} from "../../models/OpeningHours";
import {Slot} from "../../models/TimeSlot";
import AppText from "../AppText/AppText";
import SlotsList from "../SlotsList/SlotsList";

export interface Props {
  day: DayType;
  slots: Slot[];
  isToday?: boolean;
}

const ListItem: React.FC<Props> = ({day, slots, isToday}: Props) => {
  return (
    <View style={styles.rootContainer}>
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
    </View>
  );
};

export default ListItem;
