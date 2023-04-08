import React from "react";
import {View} from "react-native";

import {styles} from "./ListItem.styles";
import {DayType} from "../../models/OpeningHours";
import {Slot} from "../../models/TimeSlot";
import AppText from "../AppText/AppText";
import SlotsList from "../SlotsList/SlotsList";

interface Props {
  day: DayType;
  slots: Slot[];
  isToday?: boolean;
}

const ListItem: React.FC<Props> = ({day, slots, isToday}: Props) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.dateContainer}>
        <AppText size="m" type="semiBold">
          {day}
        </AppText>
        {isToday && (
          <AppText
            size="s"
            type="bold"
            color="accent"
            style={styles.todayIndicator}>
            TODAY
          </AppText>
        )}
      </View>
      <SlotsList slots={slots} />
    </View>
  );
};

export default ListItem;
