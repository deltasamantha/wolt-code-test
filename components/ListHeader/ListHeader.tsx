import React from "react";
import {Image, View} from "react-native";

import {styles} from "./ListHeader.styles";
import locale from "../../config/Locale";
import AppText from "../AppText/AppText";
import Divider from "../Divider/Divider";

const ListHeader: React.FC = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Image
          source={require("../../assets/icons/clock.png")}
          style={styles.clock}
          testID="clockImage"
        />
        <AppText size="l" type="bold" style={styles.title}>
          {locale.slotsListTitle}
        </AppText>
      </View>
      <Divider />
    </View>
  );
};

export default ListHeader;
