import {Meta, StoryObj} from "@storybook/react-native";
import {View} from "react-native";

import AppText, {Props} from "./AppText";
import {storyStyles} from "./AppText.styles";

/**
 * Story of AppText
 */
const AppTextMeta: Meta<Props> = {
  title: "AppText",
  component: AppText,
  argTypes: {
    type: {
      description: "Text type of the text.",
      control: "radio",
      options: ["bold", "regular", "semiBold"],
    },
    color: {
      description: "Text color type of the text.",
      control: "radio",
      options: {light: "light", dark: "dark", accent: "accent"},
    },
    size: {
      description: "Text size type of the text.",
      control: "radio",
      options: ["s", "m", "l"],
    },
  },
  args: {
    children: "Code test",
  },
  decorators: [
    Story => (
      <View style={storyStyles.rootContainer}>
        <Story />
      </View>
    ),
  ],
};

export default AppTextMeta;

export const Primary: StoryObj<Props> = {
  args: {
    children: "Primary text",
  },
};

export const LightColorLargeBold: StoryObj<Props> = {
  args: {
    type: "bold",
    color: "light",
    size: "l",
  },
};
export const AccentColorLargeSemiBold: StoryObj<Props> = {
  args: {
    type: "semiBold",
    color: "accent",
    size: "l",
  },
};
