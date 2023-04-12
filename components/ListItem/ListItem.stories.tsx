import {Meta, StoryObj} from "@storybook/react-native";
import {View} from "react-native";

import ListItem, {Props} from "./ListItem";
import {storyStyles} from "./ListItem.styles";
import {DayType} from "../../models/OpeningHours";
import {Slot} from "../../models/TimeSlot";

const mockedSlots: Slot[] = [
  {
    open: 36000,
    close: 43200,
  },
  {
    open: 43500,
    close: 75600,
  },
];

const ListItemMeta: Meta<Props> = {
  title: "ListItem",
  component: ListItem,
  argTypes: {
    day: {
      name: "Day type",
      required: true,
      description: "Day type",
      control: {
        type: "radio",
      },
      options: {
        monday: "monday" as DayType,
        tuesday: "tuesday" as DayType,
        wednesday: "wednesday" as DayType,
        thursday: "thursday" as DayType,
        friday: "friday" as DayType,
        saturday: "saturday" as DayType,
        sunday: "sunday" as DayType,
      },
    },
    isToday: {
      description: "Is today",
      control: {
        type: "boolean",
      },
    },
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
    day: "monday",
    slots: [],
  },
};

export const TodayItemWithNoSlots: StoryObj<Props> = {
  args: {
    ...Primary.args,
    isToday: true,
  },
};

export const TodayItemWithSingleSlot: StoryObj<Props> = {
  args: {
    ...Primary.args,
    isToday: true,
    slots: mockedSlots.slice(1),
  },
};

export const ItemWithMultipleSlot: StoryObj<Props> = {
  args: {
    ...Primary.args,
    isToday: true,
    slots: mockedSlots,
  },
};
