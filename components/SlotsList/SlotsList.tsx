import React from "react";
import {View} from "react-native";

import {styles} from "./SlotsList.styles";
import {Slot} from "../../models/TimeSlot";
import {getTimeSlotTimeStamp} from "../../utils/DateTimeUtils";
import AppText from "../AppText/AppText";

export interface Props {
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
          <AppText type="regular" color="dark" size="m" key={index}>
            {getTimeSlotTimeStamp(slot.open, slot.close)}
          </AppText>
        ))}
    </View>
  );
};

export default SlotsList;
