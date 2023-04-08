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
}

const ListItem: React.FC<Props> = ({day, slots}: Props) => {
  return (
    <View style={styles.rootContainer}>
      <AppText size="m" type="semiBold">
        {day}
      </AppText>
      <SlotsList slots={slots} />
    </View>
  );
};

export default ListItem;
