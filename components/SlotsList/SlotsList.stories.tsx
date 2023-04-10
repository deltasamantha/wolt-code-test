import {Meta, StoryObj} from "@storybook/react-native";
import {View} from "react-native";

import SlotsList, {Props} from "./SlotsList";
import {storyStyles} from "./SlotsList.styles";
import {mockedSlots} from "./mockedData";

const ListItemMeta: Meta<Props> = {
  title: "SlotsList",
  component: SlotsList,
  argTypes: {
    slots: {
      description: "Available slots for the day",
      control: "object",
    },
  },
  decorators: [
    Story => (
      <View style={storyStyles.rootContainer}>
        <Story />
      </View>
    ),
  ],
};

export default ListItemMeta;

export const Primary: StoryObj<Props> = {
  args: {
    slots: [],
  },
};

export const ItemWithSingleSlot: StoryObj<Props> = {
  args: {
    slots: mockedSlots.slice(1),
  },
};

export const ItemWithMultipleSlot: StoryObj<Props> = {
  args: {
    slots: mockedSlots,
  },
};
