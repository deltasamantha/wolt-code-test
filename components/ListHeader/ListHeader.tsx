import React from "react";
import {View} from "react-native";

import {styles} from "./ListHeader.styles";
import locale from "../../config/Locale";
import AppText from "../AppText/AppText";
import Divider from "../Divider/Divider";

const ListHeader: React.FC = () => {
  return (
    <View style={styles.rootContainer}>
      <View testID="clockImage" style={styles.titleContainer}>
        <View style={styles.clock} />
        <AppText size="l" type="bold" style={styles.title}>
          {locale.slotsListTitle}
        </AppText>
      </View>
      <Divider />
    </View>
  );
};

export default ListHeader;
