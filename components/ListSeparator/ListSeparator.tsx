import React from "react";
import Animated, {Easing, FadeIn} from "react-native-reanimated";

import {styles} from "./ListSeparator.styles";
import Divider from "../Divider/Divider";

const ListSeparator: React.FC = () => {
  return (
    <Animated.View
      style={styles.rootContainer}
      entering={FadeIn.delay(200).easing(Easing.linear)}>
      <Divider type="light" />
    </Animated.View>
  );
};

export default ListSeparator;
