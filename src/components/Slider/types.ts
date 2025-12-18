import { ViewStyle, TextStyle } from 'react-native';

export type SliderVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type SliderSize = 'sm' | 'md' | 'lg';

export interface SliderProps {
  /**
   * Current value of the slider
   * @default 0
   */
  value?: number;

  /**
   * Callback function called when the value changes
   */
  onValueChange?: (value: number) => void;

  /**
   * Callback function called when the user starts sliding
   */
  onSlidingStart?: (value: number) => void;

  /**
   * Callback function called when the user stops sliding
   */
  onSlidingComplete?: (value: number) => void;

  /**
   * Minimum value of the slider
   * @default 0
   */
  minimumValue?: number;

  /**
   * Maximum value of the slider
   * @default 100
   */
  maximumValue?: number;

  /**
   * Step value for the slider (increment/decrement)
   * @default 1
   */
  step?: number;

  /**
   * The visual style variant of the slider
   * @default 'primary'
   */
  variant?: SliderVariant;

  /**
   * The size of the slider
   * @default 'md'
   */
  size?: SliderSize;

  /**
   * Whether the slider is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether to show the value label
   * @default false
   */
  showValue?: boolean;

  /**
   * Custom format function for the value label
   */
  formatValue?: (value: number) => string;

  /**
   * Custom styles for the slider container
   */
  style?: ViewStyle;

  /**
   * Custom styles for the track (background)
   */
  trackStyle?: ViewStyle;

  /**
   * Custom styles for the filled track
   */
  minimumTrackStyle?: ViewStyle;

  /**
   * Custom styles for the unfilled track
   */
  maximumTrackStyle?: ViewStyle;

  /**
   * Custom styles for the thumb (handle)
   */
  thumbStyle?: ViewStyle;

  /**
   * Custom styles for the value label
   */
  valueLabelStyle?: TextStyle;

  /**
   * Custom color for the minimum track
   */
  minimumTrackTintColor?: string;

  /**
   * Custom color for the maximum track
   */
  maximumTrackTintColor?: string;

  /**
   * Custom color for the thumb
   */
  thumbTintColor?: string;

  /**
   * Whether to show tick marks at step intervals
   * @default false
   */
  showTicks?: boolean;

  /**
   * Test ID for testing purposes
   */
  testID?: string;
}
