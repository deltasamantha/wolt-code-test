import React from "react";
import {View} from "react-native";

import {styles} from "./Divider.styles";
import {getDividerColor} from "../../utils/DividerUtils";

export type DividerType = "light" | "dark";

export interface Props {
  type?: DividerType;
}

const Divider: React.FC<Props> = ({type = "dark"}: Props) => {
  return (
    <View style={[styles.divider, {backgroundColor: getDividerColor(type)}]} />
  );
};

export default Divider;
