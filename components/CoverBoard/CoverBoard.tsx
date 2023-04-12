import React, {useEffect} from "react";
import {View, useWindowDimensions} from "react-native";
import {useSharedValue} from "react-native-reanimated";

import {styles} from "./CoverBoard.styles";
import CoverBoardItem from "../CoverBoardItem/CoverBoardItem";

const CoverBoard: React.FC = () => {
  const translation = useSharedValue<number>(0);
  const {width, height} = useWindowDimensions();

  useEffect(() => {
    translation.value = 1;
  }, []);

  const itemSize = width * 0.8;
  const bottomItemSize = width;

  return (
    <View style={styles.rootContainer}>
      <CoverBoardItem
        source={require("../../assets/images/food-plate-top.png")}
        originX={0}
        originY={-height}
        destinationX={0}
        destinationY={-itemSize / 2}
        style={{width: itemSize, height: itemSize}}
        testID="top"
      />

      <CoverBoardItem
        source={require("../../assets/images/food-plate-middle.png")}
        originX={-width}
        originY={height / 2}
        destinationX={-itemSize / 2}
        destinationY={height / 4}
        style={{width: itemSize, height: itemSize}}
        testID="middle"
      />

      <CoverBoardItem
        source={require("../../assets/images/food-plate-bottom.png")}
        originX={width * 1.4}
        originY={height * 1.5}
        destinationX={width - itemSize * 0.7}
        destinationY={height - itemSize * 0.9}
        style={{width: bottomItemSize, height: bottomItemSize}}
        testID="bottom"
      />
    </View>
  );
};

export default CoverBoard;
