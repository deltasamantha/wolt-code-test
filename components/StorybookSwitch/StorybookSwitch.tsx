import Constants from "expo-constants";
import React, {ReactNode} from "react";

import StorybookUIRoot from "../../.storybook/index";

/**
 * StorybookSwitch props
 */
interface Props {
  /** AppRoot content */
  children: ReactNode;
}

/**
 * ## StorybookSwitch component
 * @description This component switch between StoryBookRoot and AppRoot.
 */
const StorybookSwitch: React.FC<Props> = ({children}: Props) => {
  return (
    <>
      {__DEV__ && Constants.expoConfig?.extra?.storybookEnabled ? (
        <StorybookUIRoot />
      ) : (
        children
      )}
    </>
  );
};

export default StorybookSwitch;
