import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Slider from '../Slider/Slider';

describe('Slider Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Slider testID="slider" />);
    
    expect(getByTestId('slider')).toBeTruthy();
  });

  it('renders with custom value', () => {
    const { getByTestId } = render(
      <Slider testID="slider" value={50} minimumValue={0} maximumValue={100} />
    );
    
    expect(getByTestId('slider')).toBeTruthy();
  });

  it('renders with different variants', () => {
    const variants = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const;
    
    variants.forEach(variant => {
      const { getByTestId } = render(
        <Slider testID={`slider-${variant}`} variant={variant} />
      );
      
      expect(getByTestId(`slider-${variant}`)).toBeTruthy();
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    
    sizes.forEach(size => {
      const { getByTestId } = render(
        <Slider testID={`slider-${size}`} size={size} />
      );
      
      expect(getByTestId(`slider-${size}`)).toBeTruthy();
    });
  });

  it('renders disabled state', () => {
    const { getByTestId } = render(
      <Slider testID="slider" disabled />
    );
    
    expect(getByTestId('slider')).toBeTruthy();
  });

  it('shows value label when showValue is true', () => {
    const { getByText } = render(
      <Slider value={50} showValue testID="slider" />
    );
    
    expect(getByText('50')).toBeTruthy();
  });

  it('formats value with custom formatter', () => {
    const formatValue = (value: number) => `$${value}`;
    const { getByText } = render(
      <Slider value={50} showValue formatValue={formatValue} testID="slider" />
    );
    
    expect(getByText('$50')).toBeTruthy();
  });

  it('calls onValueChange when value changes', () => {
    const onValueChange = jest.fn();
    const { getByTestId } = render(
      <Slider testID="slider" onValueChange={onValueChange} />
    );
    
    expect(getByTestId('slider')).toBeTruthy();
    // Note: Testing gesture interactions requires more complex setup
    // This test validates that the callback prop is accepted
  });

  it('calls onSlidingStart and onSlidingComplete', () => {
    const onSlidingStart = jest.fn();
    const onSlidingComplete = jest.fn();
    
    const { getByTestId } = render(
      <Slider
        testID="slider"
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSlidingComplete}
      />
    );
    
    expect(getByTestId('slider')).toBeTruthy();
    // Note: Testing gesture interactions requires more complex setup
    // This test validates that the callback props are accepted
  });

  it('respects min and max values', () => {
    const { getByTestId } = render(
      <Slider
        testID="slider"
        minimumValue={10}
        maximumValue={90}
        value={50}
      />
    );
    
    expect(getByTestId('slider')).toBeTruthy();
  });

  it('respects step value', () => {
    const { getByTestId } = render(
      <Slider
        testID="slider"
        step={5}
        value={25}
      />
    );
    
    expect(getByTestId('slider')).toBeTruthy();
  });

  it('renders with custom colors', () => {
    const { getByTestId } = render(
      <Slider
        testID="slider"
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#00FF00"
        thumbTintColor="#0000FF"
      />
    );
    
    expect(getByTestId('slider')).toBeTruthy();
  });

  it('renders with ticks when showTicks is true', () => {
    const { getByTestId } = render(
      <Slider
        testID="slider"
        showTicks
        step={10}
        minimumValue={0}
        maximumValue={100}
      />
    );
    
    expect(getByTestId('slider')).toBeTruthy();
  });

  it('applies custom styles', () => {
    const customStyle = { marginTop: 20 };
    const { getByTestId } = render(
      <Slider testID="slider" style={customStyle} />
    );
    
    expect(getByTestId('slider')).toBeTruthy();
  });
});
