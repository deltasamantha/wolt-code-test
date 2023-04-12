import Constants from "expo-constants";
import React, {ReactNode} from "react";

import StorybookUIRoot from "../../.storybook/index";

interface Props {
  children: ReactNode;
}

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
