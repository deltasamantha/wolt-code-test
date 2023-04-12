import React from "react";
import {View} from "react-native";

import {styles} from "./ListPlaceholder.styles";
import locale from "../../config/Locale";
import AppText from "../AppText/AppText";

const ListPlaceholder = () => {
  return (
    <View style={styles.rootContainer}>
      <AppText size="m" color="light">
        {locale.slotListPlaceholder}
      </AppText>
    </View>
  );
};

export default ListPlaceholder;
