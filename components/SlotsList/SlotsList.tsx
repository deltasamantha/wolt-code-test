import React from "react";
import {View} from "react-native";

import {styles} from "./SlotsList.styles";
import {Slot} from "../../models/TimeSlot";
import {formatTime} from "../../utils/DateTimeUtils";
import AppText from "../AppText/AppText";

interface Props {
  slots: Slot[];
}

const SlotsList: React.FC<Props> = ({slots}: Props) => {
  return (
    <View style={styles.rootContainer}>
      {!slots.length && (
        <AppText type="regular" color="light" size="m">
          Closed
        </AppText>
      )}
      {!!slots &&
        slots.map((slot, index) => (
          <AppText
            type="regular"
            color="dark"
            size="m"
            key={index}>{`${formatTime(slot.open)} -  ${formatTime(
            slot.close!,
          )}`}</AppText>
        ))}
    </View>
  );
};

export default SlotsList;
