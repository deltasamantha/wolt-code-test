import {Easing, WithTimingConfig} from "react-native-reanimated";

/**
 * Animation duration for onboarding animation
 */
export const ONBOARDING_ANIMATION_DURATION = 500;

/**
 * Delay for the list item appearance animation
 */
export const LIST_REVEAL_ANIMATION_DELAY = 200;

/**
 * Delay for each list item
 */
export const LIST_REVEAL_ANIMATION_STEP = 50;

/**
 * Animation timing configurations for Cover board items
 */
export const timingConfig: WithTimingConfig = {
  duration: ONBOARDING_ANIMATION_DURATION,
  easing: Easing.bezier(0.5, 0.01, 0, 1),
};
