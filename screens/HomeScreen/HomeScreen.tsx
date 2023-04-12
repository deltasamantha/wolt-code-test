import React, {useMemo} from "react";
import {View, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {styles} from "./HomeScreen.styles";
import ListHeader from "../../components/ListHeader/ListHeader";
import ListItem from "../../components/ListItem/ListItem";
import ListPlaceholder from "../../components/ListPlaceholder/ListPlaceholder";
import ListSeparator from "../../components/ListSeparator/ListSeparator";
import {getHoursData} from "../../utils/DataUtils";
import {getTodayDay} from "../../utils/DateTimeUtils";

const HomeScreen: React.FC = () => {
  const data = useMemo(() => {
    return getHoursData();
  }, []);

  return (
    <SafeAreaView style={styles.rootContainer} edges={["top", "bottom"]}>
      <FlatList
        style={styles.list}
        data={data}
        contentContainerStyle={styles.listContent}
        renderItem={({item, index}) => (
          <ListItem
            day={item.day}
            slots={item.slots}
            index={index}
            isToday={item.day === getTodayDay()}
          />
        )}
        ListHeaderComponent={<ListHeader />}
        ListFooterComponent={<View style={styles.listFooter} />}
        ItemSeparatorComponent={() => <ListSeparator />}
        ListEmptyComponent={<ListPlaceholder />}
        keyExtractor={item => item.day}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
