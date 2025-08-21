import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { CardProps } from './types';
import theme from '../../theme';

const Card = ({
  children,
  variant = 'elevated',
  size = 'md',
  style,
  pressable = false,
  onPress,
  disabled = false,
  borderRadius,
  backgroundColor,
  showShadow = true,
  shadowConfig,
}: CardProps): JSX.Element => {
  const cardStyle = [
    styles.base,
    styles[variant],
    styles[size],
    showShadow && variant === 'elevated' && styles.shadow,
    {
      borderRadius: borderRadius ?? theme.borderRadius.md,
      backgroundColor: backgroundColor ?? getBackgroundColor(variant),
    },
    disabled && styles.disabled,
    shadowConfig && variant === 'elevated' && {
      ...shadowConfig,
      ...(Platform.OS === 'android' && { elevation: shadowConfig.elevation ?? 4 }),
    },
    style,
  ];

  const CardWrapper = pressable ? TouchableOpacity : View;

  return (
    <CardWrapper
      style={cardStyle}
      onPress={pressable ? onPress : undefined}
      disabled={disabled}
      activeOpacity={pressable ? 0.7 : 1}
      accessibilityRole={pressable ? 'button' : undefined}
    >
      {children}
    </CardWrapper>
  );
};

const getBackgroundColor = (variant: CardProps['variant']) => {
  switch (variant) {
    case 'elevated':
      return theme.colors.surface;
    case 'outlined':
      return 'transparent';
    case 'filled':
      return theme.colors.surfaceVariant;
    default:
      return theme.colors.surface;
  }
};

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
  },
  elevated: {
    backgroundColor: theme.colors.surface,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.outline,
  },
  filled: {
    backgroundColor: theme.colors.surfaceVariant,
  },
  sm: {
    padding: theme.spacing.sm,
  },
  md: {
    padding: theme.spacing.md,
  },
  lg: {
    padding: theme.spacing.lg,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  disabled: {
    opacity: 0.6,
  },
});

export default Card;
