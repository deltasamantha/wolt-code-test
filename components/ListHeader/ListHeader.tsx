import React from "react";
import {View} from "react-native";

import {styles} from "./ListHeader.styles";
import AppText from "../AppText/AppText";
import Divider from "../Divider/Divider";

interface Props {
  title: string;
}

const ListHeader: React.FC<Props> = ({title}: Props) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.clock} />
        <AppText size="l" type="bold" style={styles.title}>
          {title}
        </AppText>
      </View>
      <Divider />
      <View />
    </View>
  );
};

export default ListHeader;
