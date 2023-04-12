import {Easing, WithTimingConfig} from "react-native-reanimated";

export const ONBOARDING_ANIMATION_DURATION = 500;

export const timingConfig: WithTimingConfig = {
  duration: ONBOARDING_ANIMATION_DURATION,
  easing: Easing.bezier(0.5, 0.01, 0, 1),
};


export const LIST_REVEAL_ANIMATION_DELAY = 200;
export const LIST_REVEAL_ANIMATION_STEP = 50;
