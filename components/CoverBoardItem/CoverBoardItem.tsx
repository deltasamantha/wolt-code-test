import {Image} from "expo-image";
import React, {useEffect} from "react";
import {ImageSourcePropType, ImageStyle, StyleProp} from "react-native";
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

/**
 * Prop definition for CoverBoardItem component
 */
interface Props {
  /** X coordinates to start image animation from */
  originX: number;
  /** Y coordinates to start image animation from */
  originY: number;
  /** X coordinates to end image animation to */
  destinationX: number;
  /** Y coordinates to end image animation to */
  destinationY: number;
  /** Image recourse to be displayed */
  source: ImageSourcePropType;
  /** Style prop for the Image, accepts ImageStyle */
  style: StyleProp<ImageStyle>;
  /** TestId for testing */
  testID?: string;
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

/**
 * ## CoverBoardItem component
 * ------------
 * @description Component to render animated images in CoverBoard component. Uses cache enabled Image component for better performance.
 * @todo Implement animate blur image feature after loading
 */
const CoverBoardItem: React.FC<Props> = ({
  originX,
  originY,
  destinationX,
  destinationY,
  source,
  style,
  testID,
}: Props) => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const translation = useSharedValue<number>(0);

  useEffect(() => {
    translation.value = 1;
  }, []);

  /**
   * Translate X animation value
   */
  const plate1TranslateX = useDerivedValue<number>(() => {
    return withTiming(
      interpolate(translation.value, [0, 1], [originX, 0], Extrapolate.CLAMP),
      timingConfig,
    );
  });

  /**
   * Translate Y animation value
   */
  const plate1TranslateY = useDerivedValue<number>(() => {
    return withTiming(
      interpolate(translation.value, [0, 1], [originY, 0], Extrapolate.CLAMP),
      timingConfig,
    );
  });

  /**
   * Translation animation style
   */
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
      testID={`${testID}-board-item`}
      style={[
        styles.item,
        style,
        {left: destinationX, top: destinationY},
        plate1Animation,
      ]}
      placeholder={blurhash}
      contentFit="cover"
      blurRadius={0} //should animate this
      cachePolicy="memory-disk"
      priority="high"
    />
  );
};

export default CoverBoardItem;
