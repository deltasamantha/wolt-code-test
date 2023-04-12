import React, {ReactNode} from "react";
import {Text, TextProps, StyleProp, TextStyle} from "react-native";

import {TextSizeType, TextType, TextColorType} from "../../models/TextType";
import {
  getFontColor,
  getFontFamily,
  getFontLineHeight,
  getFontSize,
} from "../../utils/TextUtils";

/**
 * Prop definition for AppText component
 */
export interface Props extends TextProps {
  /** Text content in most cases */
  children?: ReactNode;
  /** Font size type for the text, one of `"s" | "m" | "l"` */
  size?: TextSizeType;
  /** Font face type for the text, one of `"bold" | "semiBold" | "regular"` */
  type?: TextType;
  /** Color type for the text, could be one of `"light" | "dark" | "accent"` or specific color hex value */
  color?: TextColorType;
  /** Style prop for the text, accepts TextStyles */
  style?: StyleProp<TextStyle>;
}

/**
 * ### AppText component
 * -------------
 * @description Component to render text component, A drop in replacement for react native Text inbuilt with Roboto font face.
 */
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
