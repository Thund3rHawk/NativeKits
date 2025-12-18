import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  LayoutChangeEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { SliderProps, SliderVariant, SliderSize } from './types';
import theme from '../../theme';

const Slider = ({
  value = 0,
  onValueChange,
  onSlidingStart,
  onSlidingComplete,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  variant = 'primary',
  size = 'md',
  disabled = false,
  showValue = false,
  formatValue,
  style,
  trackStyle,
  minimumTrackStyle,
  maximumTrackStyle,
  thumbStyle,
  valueLabelStyle,
  minimumTrackTintColor,
  maximumTrackTintColor,
  thumbTintColor,
  showTicks = false,
  testID,
}: SliderProps) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [currentValue, setCurrentValue] = useState(value);
  const thumbPosition = useRef(new Animated.Value(0)).current;
  const isSliding = useRef(false);
  const gestureStartPosition = useRef(0);

  // Calculate thumb position based on value (accounting for thumb size at edges)
  const valueToPosition = useCallback(
    (val: number) => {
      if (sliderWidth === 0) return 0;
      const clampedValue = Math.max(minimumValue, Math.min(maximumValue, val));
      const percentage = (clampedValue - minimumValue) / (maximumValue - minimumValue);
      const thumbSize = getThumbSize();
      const trackWidth = sliderWidth - thumbSize;
      return percentage * trackWidth + thumbSize / 2;
    },
    [minimumValue, maximumValue, sliderWidth]
  );

  // Calculate value based on thumb position
  const positionToValue = useCallback(
    (position: number) => {
      if (sliderWidth === 0) return minimumValue;
      const thumbSize = getThumbSize();
      const trackWidth = sliderWidth - thumbSize;
      const adjustedPosition = position - thumbSize / 2;
      const percentage = Math.max(0, Math.min(1, adjustedPosition / trackWidth));
      let val = minimumValue + percentage * (maximumValue - minimumValue);
      
      // Apply step
      if (step > 0) {
        val = Math.round(val / step) * step;
      }
      
      return Math.max(minimumValue, Math.min(maximumValue, val));
    },
    [minimumValue, maximumValue, step, sliderWidth]
  );

  // Update thumb position when value changes
  React.useEffect(() => {
    if (!isSliding.current) {
      const newPosition = valueToPosition(value);
      Animated.spring(thumbPosition, {
        toValue: newPosition,
        useNativeDriver: false,
        damping: 15,
        stiffness: 150,
      }).start();
      setCurrentValue(value);
    }
  }, [value, valueToPosition, thumbPosition]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !disabled,
      onMoveShouldSetPanResponder: () => !disabled,
      onPanResponderGrant: () => {
        isSliding.current = true;
        gestureStartPosition.current = valueToPosition(currentValue);
        if (onSlidingStart) {
          onSlidingStart(currentValue);
        }
      },
      onPanResponderMove: (_, gestureState) => {
        const thumbSize = getThumbSize();
        const minPosition = thumbSize / 2;
        const maxPosition = sliderWidth - thumbSize / 2;
        const newPosition = Math.max(
          minPosition,
          Math.min(maxPosition, gestureStartPosition.current + gestureState.dx)
        );
        const newValue = positionToValue(newPosition);
        
        thumbPosition.setValue(newPosition);
        setCurrentValue(newValue);
        
        if (onValueChange) {
          onValueChange(newValue);
        }
      },
      onPanResponderRelease: () => {
        isSliding.current = false;
        if (onSlidingComplete) {
          onSlidingComplete(currentValue);
        }
      },
    })
  ).current;

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setSliderWidth(width);
    const initialPosition = valueToPosition(currentValue);
    thumbPosition.setValue(initialPosition);
  };

  const getVariantColor = (): string => {
    if (minimumTrackTintColor) {
      return minimumTrackTintColor;
    }

    switch (variant) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'success':
        return '#34C759';
      case 'warning':
        return '#FF9500';
      case 'danger':
        return '#FF3B30';
      case 'info':
        return '#007AFF';
      default:
        return theme.colors.primary;
    }
  };

  const getThumbSize = (): number => {
    switch (size) {
      case 'sm':
        return 16;
      case 'md':
        return 24;
      case 'lg':
        return 32;
      default:
        return 24;
    }
  };

  const getTrackHeight = (): number => {
    switch (size) {
      case 'sm':
        return 4;
      case 'md':
        return 6;
      case 'lg':
        return 8;
      default:
        return 6;
    }
  };

  const variantColor = getVariantColor();
  const thumbSize = getThumbSize();
  const trackHeight = getTrackHeight();

  const containerStyles: ViewStyle = {
    ...styles.container,
    opacity: disabled ? 0.5 : 1,
    ...style,
  };

  const trackContainerStyles: ViewStyle = {
    ...styles.trackContainer,
    height: trackHeight,
    ...trackStyle,
  };

  const minimumTrackStyles: ViewStyle = {
    ...styles.minimumTrack,
    backgroundColor: variantColor,
    height: trackHeight,
    ...minimumTrackStyle,
  };

  const maximumTrackStyles: ViewStyle = {
    ...styles.maximumTrack,
    backgroundColor: maximumTrackTintColor || theme.colors.border,
    height: trackHeight,
    ...maximumTrackStyle,
  };

  const thumbStyles: ViewStyle = {
    ...styles.thumb,
    width: thumbSize,
    height: thumbSize,
    borderRadius: thumbSize / 2,
    backgroundColor: thumbTintColor || variantColor,
    ...thumbStyle,
  };

  const valueLabelStyles: TextStyle = {
    ...styles.valueLabel,
    fontSize: size === 'sm' ? theme.typography.fontSize.sm : theme.typography.fontSize.md,
    ...valueLabelStyle,
  };

  const renderTicks = () => {
    if (!showTicks || step <= 0) return null;

    const tickCount = Math.floor((maximumValue - minimumValue) / step) + 1;
    const ticks = [];

    for (let i = 0; i < tickCount; i++) {
      const tickValue = minimumValue + i * step;
      const tickPosition = valueToPosition(tickValue);
      
      ticks.push(
        <View
          key={i}
          style={[
            styles.tick,
            {
              left: tickPosition,
              height: trackHeight * 1.5,
            },
          ]}
        />
      );
    }

    return <View style={styles.ticksContainer}>{ticks}</View>;
  };

  // Calculate decimal places based on step precision
  const getDecimalPlaces = (stepValue: number): number => {
    if (stepValue >= 1) return 0;
    const stepString = stepValue.toString();
    const decimalIndex = stepString.indexOf('.');
    if (decimalIndex === -1) return 0;
    return stepString.length - decimalIndex - 1;
  };

  const displayValue = formatValue
    ? formatValue(currentValue)
    : currentValue.toFixed(getDecimalPlaces(step));

  return (
    <View style={containerStyles} testID={testID}>
      {showValue && (
        <View style={styles.valueLabelContainer}>
          <Text style={valueLabelStyles}>{displayValue}</Text>
        </View>
      )}
      <View
        style={styles.sliderContainer}
        onLayout={handleLayout}
        {...(disabled ? {} : panResponder.panHandlers)}
      >
        <View style={trackContainerStyles}>
          <View style={maximumTrackStyles} />
          <Animated.View
            style={[
              minimumTrackStyles,
              {
                width: thumbPosition,
              },
            ]}
          />
        </View>
        {renderTicks()}
        <Animated.View
          style={[
            thumbStyles,
            {
              left: -thumbSize / 2,
              transform: [
                {
                  translateX: thumbPosition,
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: theme.spacing.sm,
  },
  valueLabelContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  valueLabel: {
    color: theme.colors.text,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight.medium,
  },
  sliderContainer: {
    position: 'relative',
    justifyContent: 'center',
    height: 40,
  },
  trackContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: 10,
    overflow: 'hidden',
  },
  minimumTrack: {
    position: 'absolute',
    left: 0,
    borderRadius: 10,
  },
  maximumTrack: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: 10,
  },
  thumb: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ticksContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  tick: {
    position: 'absolute',
    width: 2,
    backgroundColor: theme.colors.border,
  },
});

export default Slider;
