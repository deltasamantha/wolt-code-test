import React from "react";
import {View} from "react-native";

import {styles} from "./Divider.styles";
import {getDividerColor} from "../../utils/DividerUtils";

export type DividerType = "light" | "dark";

/**
 * Prop definition for Divider component
 */
export interface Props {
  /** Color type for the divider, could be one of `"light" | "dark"` */
  type?: DividerType;
}

/**
 * ## Divider component
 * -------------
 * @description Component to render a horizontal divider line.
 */
const Divider: React.FC<Props> = ({type = "dark"}: Props) => {
  return (
    <View
      testID="divider"
      style={[styles.divider, {backgroundColor: getDividerColor(type)}]}
    />
  );
};

export default Divider;
