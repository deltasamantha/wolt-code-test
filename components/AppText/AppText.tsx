import React, {ReactNode} from "react";
import {Text, TextProps, StyleProp, TextStyle} from "react-native";

import {TextSizeType, TextType, TextColorType} from "../../models/TextType";
import {
  getFontColor,
  getFontFamily,
  getFontLineHeight,
  getFontSize,
} from "../../utils/TextUtils";

export interface Props extends TextProps {
  children?: ReactNode;
  size?: TextSizeType;
  type?: TextType;
  color?: TextColorType;
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<Props> = ({
  children,
  size = "s",
  type = "regular",
  color = "dark",
  style,
  ...textProps
}: Props) => {
  return (
    <Text
      style={[
        {
          fontSize: getFontSize(size),
          lineHeight: getFontLineHeight(size),
          fontFamily: getFontFamily(type),
          color: getFontColor(color),
        },
        style,
      ]}
      {...textProps}>
      {children}
    </Text>
  );
};

export default AppText;
