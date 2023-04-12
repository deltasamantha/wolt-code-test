import {Easing, WithTimingConfig} from "react-native-reanimated";

import {ONBOARDING_ANIMATION_DURATION} from "./DateTimeConfig";

export const timingConfig: WithTimingConfig = {
  duration: ONBOARDING_ANIMATION_DURATION,
  easing: Easing.bezier(0.5, 0.01, 0, 1),
};
