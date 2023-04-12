import React, {useCallback, useMemo} from "react";
import {View, FlatList, ListRenderItem} from "react-native";
import Animated, {Easing, FadeIn, StretchInY} from "react-native-reanimated";
import {SafeAreaView} from "react-native-safe-area-context";

import {styles} from "./HomeScreen.styles";
import CoverBoard from "../../components/CoverBoard/CoverBoard";
import ListHeader from "../../components/ListHeader/ListHeader";
import ListItem from "../../components/ListItem/ListItem";
import ListPlaceholder from "../../components/ListPlaceholder/ListPlaceholder";
import ListSeparator from "../../components/ListSeparator/ListSeparator";
import {
  LIST_REVEAL_ANIMATION_DELAY,
  LIST_REVEAL_ANIMATION_STEP,
} from "../../config/AnimationConfig";
import {DisplayTimeSlot} from "../../models/TimeSlot";
import {getHoursData} from "../../utils/DataUtils";
import {getTodayDay} from "../../utils/DateTimeUtils";

/**
 * ## HomeScreen component
 * -------------
 * @description Component to hold opening time slots list.
 */
const HomeScreen: React.FC = () => {
  const slotData = useMemo(() => {
    return getHoursData();
  }, []);

  const renderItem: ListRenderItem<DisplayTimeSlot> = useCallback(
    ({item, index}) => (
      <ListItem
        day={item.day}
        slots={item.slots}
        isToday={item.day === getTodayDay()}
        entering={FadeIn.delay(
          LIST_REVEAL_ANIMATION_DELAY + LIST_REVEAL_ANIMATION_STEP * index,
        ).easing(Easing.linear)}
      />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.rootContainer} edges={["top", "bottom"]}>
      <CoverBoard />
      <Animated.View entering={StretchInY}>
        <FlatList
          style={styles.list}
          data={slotData}
          contentContainerStyle={styles.listContent}
          renderItem={renderItem}
          ListHeaderComponent={<ListHeader />}
          ListFooterComponent={<View style={styles.listFooter} />}
          ItemSeparatorComponent={() => <ListSeparator />}
          ListEmptyComponent={<ListPlaceholder />}
          keyExtractor={item => item.day}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={7}
          initialNumToRender={7}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default HomeScreen;
