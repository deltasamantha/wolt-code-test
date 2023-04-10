import {Meta, StoryObj} from "@storybook/react-native";
import {View} from "react-native";

import ListHeader, {Props} from "./ListHeader";
import {storyStyles} from "./ListHeader.styles";

const ListHeaderMeta: Meta<Props> = {
  title: "ListHeader",
  component: ListHeader,
  decorators: [
    Story => (
      <View style={storyStyles.rootContainer}>
        <Story />
      </View>
    ),
  ],
};

export default ListHeaderMeta;

export const Primary: StoryObj<Props> = {
  args: {
    title: "Opening hours",
  },
};
