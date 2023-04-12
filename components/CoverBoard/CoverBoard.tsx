import React from "react";
import {View, Text} from "react-native";
import Animated from "react-native-reanimated";

import {styles} from "./CoverBoard.styles";

const CoverBoard: React.FC = () => {
  return (
    <View style={styles.rootContainer}>
      <Animated.View style={[styles.box, styles.box1]} />
      <Animated.View style={[styles.box, styles.box2]} />
      <Animated.View style={[styles.box, styles.box3]} />
    </View>
  );
};

export default CoverBoard;
