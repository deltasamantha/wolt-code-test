import React, {useEffect} from "react";
import {Image, ImageSourcePropType, ImageStyle, StyleProp} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import {styles} from "./CoverBoardItem.styles";
import {timingConfig} from "../../config/AnimationConfig";

interface Props {
  originX: number;
  originY: number;
  destinationX: number;
  destinationY: number;
  source: ImageSourcePropType;
  style: StyleProp<ImageStyle>;
  testID?: string;
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

const CoverBoardItem: React.FC<Props> = ({
  originX,
  originY,
  destinationX,
  destinationY,
  source,
  style,
  testID,
}: Props) => {
  const translation = useSharedValue<number>(0);

  useEffect(() => {
    translation.value = 1;
  }, []);

  const plate1TranslateX = useDerivedValue<number>(() => {
    return withTiming(
      interpolate(translation.value, [0, 1], [originX, 0], Extrapolate.CLAMP),
      timingConfig,
    );
  });
  const plate1TranslateY = useDerivedValue<number>(() => {
    return withTiming(
      interpolate(translation.value, [0, 1], [originY, 0], Extrapolate.CLAMP),
      timingConfig,
    );
  });

  const plate1Animation = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: plate1TranslateX.value},
        {translateY: plate1TranslateY.value},
      ],
    };
  });
  return (
    <AnimatedImage
      source={source}
      testID={`${testID}`}
      style={[
        styles.item,
        style,
        {left: destinationX, top: destinationY},
        plate1Animation,
      ]}
    />
  );
};

export default CoverBoardItem;
