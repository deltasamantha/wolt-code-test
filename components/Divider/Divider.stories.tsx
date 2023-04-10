import {Meta, StoryObj} from "@storybook/react-native";
import {View} from "react-native";

import Divider, {Props} from "./Divider";
import {storyStyles} from "./Divider.styles";

const DividerMeta: Meta<Props> = {
  title: "Divider",
  component: Divider,
  argTypes: {
    type: {
      description: "Divider color",
      control: "radio",
      options: ["light", "dark"],
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

export default DividerMeta;

export const Primary: StoryObj<Props> = {
  args: {
    type: "dark",
  },
};

export const Light: StoryObj<Props> = {
  args: {
    type: "light",
  },
};
