import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  /**
   * The text content of the badge
   * Required when dot is false, optional when dot is true
   */
  children?: React.ReactNode;
  
  /**
   * The visual style variant of the badge
   * @default 'primary'
   */
  variant?: BadgeVariant;
  
  /**
   * The size of the badge
   * @default 'md'
   */
  size?: BadgeSize;
  
  /**
   * Whether the badge is outlined (transparent background with border)
   * @default false
   */
  outlined?: boolean;
  
  /**
   * Whether to show a dot instead of text (for notification indicators)
   * @default false
   */
  dot?: boolean;
  
  /**
   * Custom styles for the badge container
   */
  style?: ViewStyle;
  
  /**
   * Custom styles for the badge text
   */
  textStyle?: TextStyle;
  
  /**
   * Whether the badge is rounded (pill shape)
   * @default true
   */
  rounded?: boolean;
  
  /**
   * Maximum number to display (for count badges)
   * If the number exceeds this, it will show "99+" for example
   */
  maxCount?: number;
}