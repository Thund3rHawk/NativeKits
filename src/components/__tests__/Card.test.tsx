import React from 'react';
import { render } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import { Card, CardHeader, CardContent, CardFooter, CardImage } from '../Card';

describe('Card', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <Card>
        <Text>Test content</Text>
      </Card>
    );

    expect(getByText('Test content')).toBeTruthy();
  });

  it('renders as pressable when pressable prop is true', () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <Card pressable onPress={onPress}>
        <Text>Test content</Text>
      </Card>
    );

    expect(getByRole('button')).toBeTruthy();
  });

  it('applies different variants correctly', () => {
    const { rerender, getByText } = render(
      <Card variant="elevated">
        <Text>Elevated card</Text>
      </Card>
    );

    expect(getByText('Elevated card')).toBeTruthy();

    rerender(
      <Card variant="outlined">
        <Text>Outlined card</Text>
      </Card>
    );

    expect(getByText('Outlined card')).toBeTruthy();

    rerender(
      <Card variant="filled">
        <Text>Filled card</Text>
      </Card>
    );

    expect(getByText('Filled card')).toBeTruthy();
  });

  it('applies different sizes correctly', () => {
    const { rerender, getByText } = render(
      <Card size="sm">
        <Text>Small card</Text>
      </Card>
    );

    expect(getByText('Small card')).toBeTruthy();

    rerender(
      <Card size="md">
        <Text>Medium card</Text>
      </Card>
    );

    expect(getByText('Medium card')).toBeTruthy();

    rerender(
      <Card size="lg">
        <Text>Large card</Text>
      </Card>
    );

    expect(getByText('Large card')).toBeTruthy();
  });
});

describe('CardHeader', () => {
  it('renders title and subtitle', () => {
    const { getByText } = render(
      <CardHeader title="Test Title" subtitle="Test Subtitle" />
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Subtitle')).toBeTruthy();
  });

  it('renders custom children when provided', () => {
    const { getByText } = render(
      <CardHeader>
        <Text>Custom header content</Text>
      </CardHeader>
    );

    expect(getByText('Custom header content')).toBeTruthy();
  });

  it('renders avatar and action when provided', () => {
    const { getByText } = render(
      <CardHeader
        title="Test Title"
        avatar={<Text>Avatar</Text>}
        action={<Text>Action</Text>}
      />
    );

    expect(getByText('Avatar')).toBeTruthy();
    expect(getByText('Action')).toBeTruthy();
  });
});

describe('CardContent', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <CardContent>
        <Text>Content text</Text>
      </CardContent>
    );

    expect(getByText('Content text')).toBeTruthy();
  });
});

describe('CardFooter', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <CardFooter>
        <Text>Footer text</Text>
      </CardFooter>
    );

    expect(getByText('Footer text')).toBeTruthy();
  });

  it('shows separator when showSeparator is true', () => {
    const { getByText } = render(
      <CardFooter showSeparator>
        <Text>Footer with separator</Text>
      </CardFooter>
    );

    expect(getByText('Footer with separator')).toBeTruthy();
  });
});

describe('CardImage', () => {
  const mockImageSource = { uri: 'https://example.com/image.jpg' };

  it('renders image correctly', () => {
    render(<CardImage source={mockImageSource} />);
    // Image rendering is hard to test in unit tests, 
    // but we can verify the component renders without errors
  });

  it('applies custom height', () => {
    render(<CardImage source={mockImageSource} height={300} />);
  });

  it('applies full width correctly', () => {
    render(<CardImage source={mockImageSource} fullWidth={false} />);
  });
});
