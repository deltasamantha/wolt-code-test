import React from "react";
import {View} from "react-native";

import {styles} from "./ListSeparator.styles";
import Divider from "../Divider/Divider";

/**
 * ## ListSeparator component
 * -------------
 * @description List item separator component of time slots list.
 */
const ListSeparator: React.FC = () => {
  return (
    <View style={styles.rootContainer}>
      <Divider type="light" />
    </View>
  );
};

export default ListSeparator;
