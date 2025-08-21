import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { ReactNode } from 'react';

export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps {
  /**
   * The content to be displayed inside the card
   */
  children: ReactNode;
  
  /**
   * Card variant style
   * @default 'elevated'
   */
  variant?: CardVariant;
  
  /**
   * Card size
   * @default 'md'
   */
  size?: CardSize;
  
  /**
   * Custom style for the card container
   */
  style?: ViewStyle;
  
  /**
   * Whether the card is pressable
   * @default false
   */
  pressable?: boolean;
  
  /**
   * Function to call when card is pressed (only works if pressable is true)
   */
  onPress?: () => void;
  
  /**
   * Whether the card is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Custom border radius
   */
  borderRadius?: number;
  
  /**
   * Custom background color
   */
  backgroundColor?: string;
  
  /**
   * Whether to show shadow (only for elevated variant)
   * @default true
   */
  showShadow?: boolean;
  
  /**
   * Custom shadow configuration
   */
  shadowConfig?: {
    shadowColor?: string;
    shadowOffset?: { width: number; height: number };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
  };
}

export interface CardHeaderProps {
  /**
   * Header title
   */
  title?: string;
  
  /**
   * Header subtitle
   */
  subtitle?: string;
  
  /**
   * Custom header content
   */
  children?: ReactNode;
  
  /**
   * Avatar or icon to display
   */
  avatar?: ReactNode;
  
  /**
   * Action component (usually buttons or icons)
   */
  action?: ReactNode;
  
  /**
   * Custom style for header container
   */
  style?: ViewStyle;
  
  /**
   * Custom style for title text
   */
  titleStyle?: TextStyle;
  
  /**
   * Custom style for subtitle text
   */
  subtitleStyle?: TextStyle;
}

export interface CardContentProps {
  /**
   * Content to display
   */
  children: ReactNode;
  
  /**
   * Custom style for content container
   */
  style?: ViewStyle;
}

export interface CardFooterProps {
  /**
   * Footer content
   */
  children: ReactNode;
  
  /**
   * Custom style for footer container
   */
  style?: ViewStyle;
  
  /**
   * Whether to add a separator line above footer
   * @default false
   */
  showSeparator?: boolean;
}

export interface CardImageProps {
  /**
   * Image source
   */
  source: any;
  
  /**
   * Image style
   */
  style?: ImageStyle;
  
  /**
   * Whether image should cover the full card width
   * @default true
   */
  fullWidth?: boolean;
  
  /**
   * Image height
   */
  height?: number;
  
  /**
   * Image resize mode
   * @default 'cover'
   */
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}
