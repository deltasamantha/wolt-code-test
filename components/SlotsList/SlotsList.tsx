import React from "react";
import {View} from "react-native";

import {styles} from "./SlotsList.styles";
import locale from "../../config/Locale";
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
          {locale.closed}
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
