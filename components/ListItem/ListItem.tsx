import React from "react";
import {View} from "react-native";
import Animated, {Easing, FadeIn} from "react-native-reanimated";

import {styles} from "./ListItem.styles";
import locale from "../../config/Locale";
import {DayType} from "../../models/OpeningHours";
import {Slot} from "../../models/TimeSlot";
import AppText from "../AppText/AppText";
import SlotsList from "../SlotsList/SlotsList";

export interface Props {
  day: DayType;
  slots: Slot[];
  index: number;
  isToday?: boolean;
}

const ListItem: React.FC<Props> = ({day, slots, isToday, index}: Props) => {
  return (
    <Animated.View
      style={styles.rootContainer}
      entering={FadeIn.delay(200 + 50 * index).easing(Easing.linear)}>
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
