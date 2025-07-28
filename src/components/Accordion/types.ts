import { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  iconColor?: string;
  animationDuration?: number;
}

export interface AccordionProps {
  children: ReactNode;
  allowMultiple?: boolean;
  defaultExpandedItems?: number[];
  containerStyle?: ViewStyle;
  itemSpacing?: number;
}