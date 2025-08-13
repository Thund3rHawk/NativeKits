import * as React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { BadgeProps, BadgeVariant, BadgeSize } from './types';
import theme from '../../theme';



const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  outlined = false,
  dot = false,
  style,
  textStyle,
  rounded = true,
  maxCount,
}: BadgeProps) => {
  const getVariantStyles = (): { container: ViewStyle; text: TextStyle } => {
    const baseContainer: ViewStyle = {
      borderRadius: rounded ? 999 : theme.borderRadius.sm,
    };

    const baseText: TextStyle = {
      color: '#FFFFFF',
      textAlign: 'center',
    };

    switch (variant) {
      case 'primary':
        return {
          container: {
            ...baseContainer,
            backgroundColor: outlined ? 'transparent' : theme.colors.primary,
            borderWidth: outlined ? 1 : 0,
            borderColor: theme.colors.primary,
          },
          text: {
            ...baseText,
            color: outlined ? theme.colors.primary : '#FFFFFF',
          },
        };
      case 'secondary':
        return {
          container: {
            ...baseContainer,
            backgroundColor: outlined ? 'transparent' : theme.colors.secondary,
            borderWidth: outlined ? 1 : 0,
            borderColor: theme.colors.secondary,
          },
          text: {
            ...baseText,
            color: outlined ? theme.colors.secondary : '#FFFFFF',
          },
        };
      case 'success':
        return {
          container: {
            ...baseContainer,
            backgroundColor: outlined ? 'transparent' : '#34C759',
            borderWidth: outlined ? 1 : 0,
            borderColor: '#34C759',
          },
          text: {
            ...baseText,
            color: outlined ? '#34C759' : '#FFFFFF',
          },
        };
      case 'warning':
        return {
          container: {
            ...baseContainer,
            backgroundColor: outlined ? 'transparent' : '#FF9500',
            borderWidth: outlined ? 1 : 0,
            borderColor: '#FF9500',
          },
          text: {
            ...baseText,
            color: outlined ? '#FF9500' : '#FFFFFF',
          },
        };
      case 'danger':
        return {
          container: {
            ...baseContainer,
            backgroundColor: outlined ? 'transparent' : '#FF3B30',
            borderWidth: outlined ? 1 : 0,
            borderColor: '#FF3B30',
          },
          text: {
            ...baseText,
            color: outlined ? '#FF3B30' : '#FFFFFF',
          },
        };
      case 'info':
        return {
          container: {
            ...baseContainer,
            backgroundColor: outlined ? 'transparent' : '#007AFF',
            borderWidth: outlined ? 1 : 0,
            borderColor: '#007AFF',
          },
          text: {
            ...baseText,
            color: outlined ? '#007AFF' : '#FFFFFF',
          },
        };
      default:
        return {
          container: {
            ...baseContainer,
            backgroundColor: outlined ? 'transparent' : theme.colors.primary,
            borderWidth: outlined ? 1 : 0,
            borderColor: theme.colors.primary,
          },
          text: {
            ...baseText,
            color: outlined ? theme.colors.primary : '#FFFFFF',
          },
        };
    }
  };

  const getSizeStyles = (): { container: ViewStyle; text: TextStyle } => {
    switch (size) {
      case 'sm':
        return {
          container: {
            paddingHorizontal: theme.spacing.xs,
            paddingVertical: 2,
            minWidth: dot ? 8 : 16,
            minHeight: dot ? 8 : 16,
          },
          text: {
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.medium,
          },
        };
      case 'md':
        return {
          container: {
            paddingHorizontal: theme.spacing.sm,
            paddingVertical: 4,
            minWidth: dot ? 12 : 20,
            minHeight: dot ? 12 : 20,
          },
          text: {
            fontSize: theme.typography.fontSize.md,
            fontWeight: theme.typography.fontWeight.medium,
          },
        };
      case 'lg':
        return {
          container: {
            paddingHorizontal: theme.spacing.md,
            paddingVertical: 6,
            minWidth: dot ? 16 : 24,
            minHeight: dot ? 16 : 24,
          },
          text: {
            fontSize: theme.typography.fontSize.lg,
            fontWeight: theme.typography.fontWeight.semibold,
          },
        };
      default:
        return {
          container: {
            paddingHorizontal: theme.spacing.sm,
            paddingVertical: 4,
            minWidth: dot ? 12 : 20,
            minHeight: dot ? 12 : 20,
          },
          text: {
            fontSize: theme.typography.fontSize.md,
            fontWeight: theme.typography.fontWeight.medium,
          },
        };
    }
  };

  const formatContent = (content: React.ReactNode): string => {
    if (typeof content === 'number' && maxCount && content > maxCount) {
      return `${maxCount}+`;
    }
    // Handle string numbers as well
    if (typeof content === 'string' && maxCount) {
      const num = parseInt(content, 10);
      if (!isNaN(num) && num > maxCount) {
        return `${maxCount}+`;
      }
    }
    return String(content);
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const containerStyle: ViewStyle = {
    ...styles.container,
    ...variantStyles.container,
    ...sizeStyles.container,
    ...style,
  };

  const textStyleCombined: TextStyle = {
    ...styles.text,
    ...variantStyles.text,
    ...sizeStyles.text,
    ...textStyle,
  };

  if (dot) {
    return (
      <View style={[containerStyle, styles.dotContainer]}>
        <View style={[styles.dot, { backgroundColor: variantStyles.text.color }]} />
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <Text style={textStyleCombined}>{formatContent(children)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: theme.typography.fontFamily,
  },
  dotContainer: {
    padding: 0,
    minWidth: 8,
    minHeight: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default Badge as any;