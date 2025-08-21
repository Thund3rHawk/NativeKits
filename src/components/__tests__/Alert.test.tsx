import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import Alert from '../Alert';

describe('Alert Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <Alert message="Test alert message" />
    );

    expect(getByText('Test alert message')).toBeTruthy();
  });

  it('renders with custom children', () => {
    const { getByText } = render(
      <Alert>
        <Text>Custom alert content</Text>
      </Alert>
    );

    expect(getByText('Custom alert content')).toBeTruthy();
  });

  it('renders with both children and message', () => {
    const { getByText } = render(
      <Alert message="Alert message">
        <Text>Custom content</Text>
      </Alert>
    );

    expect(getByText('Custom content')).toBeTruthy();
    expect(getByText('Alert message')).toBeTruthy();
  });

  it('renders with default info type', () => {
    const { getByText } = render(
      <Alert message="Info alert" />
    );

    // Test that the component renders (info is default type)
    expect(getByText('Info alert')).toBeTruthy();
  });

  it('renders success type correctly', () => {
    const { getByText } = render(
      <Alert type="success" message="Success message" />
    );

    expect(getByText('Success message')).toBeTruthy();
  });

  it('renders error type correctly', () => {
    const { getByText } = render(
      <Alert type="error" message="Error message" />
    );

    expect(getByText('Error message')).toBeTruthy();
  });

  it('renders warning type correctly', () => {
    const { getByText } = render(
      <Alert type="warning" message="Warning message" />
    );

    expect(getByText('Warning message')).toBeTruthy();
  });

  it('renders info type correctly', () => {
    const { getByText } = render(
      <Alert type="info" message="Info message" />
    );

    expect(getByText('Info message')).toBeTruthy();
  });

  it('renders close button when onClose is provided', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Alert message="Closable alert" onClose={onCloseMock} />
    );

    const closeButton = getByText('×');
    expect(closeButton).toBeTruthy();
  });

  it('does not render close button when onClose is not provided', () => {
    const { queryByText } = render(
      <Alert message="Non-closable alert" />
    );

    const closeButton = queryByText('×');
    expect(closeButton).toBeNull();
  });

  it('calls onClose when close button is pressed', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Alert message="Closable alert" onClose={onCloseMock} />
    );

    const closeButton = getByText('×');
    fireEvent.press(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('applies custom style correctly', () => {
    const customStyle = { margin: 20 };
    const { getByText } = render(
      <Alert message="Styled alert" style={customStyle} />
    );

    expect(getByText('Styled alert')).toBeTruthy();
  });

  it('applies custom text style correctly', () => {
    const customTextStyle = { fontSize: 20 };
    const { getByText } = render(
      <Alert message="Custom text alert" textStyle={customTextStyle} />
    );

    expect(getByText('Custom text alert')).toBeTruthy();
  });

  it('handles complex children content', () => {
    const { getByText } = render(
      <Alert type="warning">
        <View>
          <Text>Warning title</Text>
          <Text>Warning description</Text>
        </View>
      </Alert>
    );

    expect(getByText('Warning title')).toBeTruthy();
    expect(getByText('Warning description')).toBeTruthy();
  });

  it('renders without message when only children are provided', () => {
    const { getByText, queryByText } = render(
      <Alert>
        <Text>Only children content</Text>
      </Alert>
    );

    expect(getByText('Only children content')).toBeTruthy();
    // Since no message prop is passed, the message text should be empty or undefined
    // The component still renders the Text component but with no content
  });

  it('handles empty message gracefully', () => {
    const { getByText } = render(
      <Alert message="">
        <Text>Content with empty message</Text>
      </Alert>
    );

    expect(getByText('Content with empty message')).toBeTruthy();
  });

  it('handles undefined message gracefully', () => {
    const { getByText } = render(
      <Alert message={undefined}>
        <Text>Content with undefined message</Text>
      </Alert>
    );

    expect(getByText('Content with undefined message')).toBeTruthy();
  });

  describe('Alert Types Theme', () => {
    it('renders all alert types without errors', () => {
      const types = ['success', 'error', 'warning', 'info'] as const;
      
      types.forEach((type) => {
        const { getByText } = render(
          <Alert type={type} message={`${type} alert`} />
        );
        
        expect(getByText(`${type} alert`)).toBeTruthy();
      });
    });
  });

  describe('Accessibility', () => {
    it('sets correct accessibility properties for close button', () => {
      const onCloseMock = jest.fn();
      const { getByText } = render(
        <Alert message="Accessible alert" onClose={onCloseMock} />
      );

      const closeButton = getByText('×');
      expect(closeButton).toBeTruthy();
      
      // Test that the close button is pressable
      fireEvent.press(closeButton);
      expect(onCloseMock).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('handles multiple onClose calls correctly', () => {
      const onCloseMock = jest.fn();
      const { getByText } = render(
        <Alert message="Multi-close test" onClose={onCloseMock} />
      );

      const closeButton = getByText('×');
      
      fireEvent.press(closeButton);
      fireEvent.press(closeButton);
      fireEvent.press(closeButton);

      expect(onCloseMock).toHaveBeenCalledTimes(3);
    });

    it('renders with very long message', () => {
      const longMessage = 'This is a very long alert message that should still render correctly and handle text wrapping appropriately within the alert container.';
      
      const { getByText } = render(
        <Alert message={longMessage} />
      );

      expect(getByText(longMessage)).toBeTruthy();
    });

    it('renders with special characters in message', () => {
      const specialMessage = 'Alert with special chars: !@#$%^&*()_+-=[]{}|;:,.<>?';
      
      const { getByText } = render(
        <Alert message={specialMessage} />
      );

      expect(getByText(specialMessage)).toBeTruthy();
    });
  });
});
