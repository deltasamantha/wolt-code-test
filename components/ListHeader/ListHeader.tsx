import React from "react";
import {Image, View} from "react-native";
import Animated, {Easing, FadeIn} from "react-native-reanimated";

import {styles} from "./ListHeader.styles";
import locale from "../../config/Locale";
import AppText from "../AppText/AppText";
import Divider from "../Divider/Divider";

const AnimatedImage = Animated.createAnimatedComponent(Image);

const ListHeader: React.FC = () => {
  return (
    <Animated.View
      entering={FadeIn.delay(100).easing(Easing.linear)}
      style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <AnimatedImage
          source={require("../../assets/icons/clock.png")}
          style={styles.clock}
          testID="clockImage"
          entering={FadeIn.delay(200).easing(Easing.linear)}
        />
        <AppText size="l" type="bold" style={styles.title}>
          {locale.slotsListTitle}
        </AppText>
      </View>
      <Divider />
    </Animated.View>
  );
};

export default ListHeader;
