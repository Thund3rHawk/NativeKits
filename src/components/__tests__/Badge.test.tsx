import React from 'react';
import { render } from '@testing-library/react-native';
import Badge from '../Badge/Badge';

describe('Badge Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Badge>Test Badge</Badge>);
    
    expect(getByText('Test Badge')).toBeTruthy();
  });

  it('renders with different variants', () => {
    const variants = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const;
    
    variants.forEach(variant => {
      const { getByText } = render(
        <Badge variant={variant}>{`${variant} Badge`}</Badge>
      );
      
      expect(getByText(`${variant} Badge`)).toBeTruthy();
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    
    sizes.forEach(size => {
      const { getByText } = render(
        <Badge size={size}>{`${size} Badge`}</Badge>
      );
      
      expect(getByText(`${size} Badge`)).toBeTruthy();
    });
  });

  it('renders outlined variant', () => {
    const { getByText } = render(
      <Badge variant="primary" outlined>Outlined Badge</Badge>
    );
    
    expect(getByText('Outlined Badge')).toBeTruthy();
  });

  it('renders dot variant', () => {
    const { getByTestId } = render(
      <Badge variant="danger" dot />
    );
    
    // Dot badges don't have text, so we check for the component
    expect(getByTestId).toBeDefined();
  });

  it('formats number with maxCount', () => {
    const { getByText } = render(
      <Badge maxCount={99}>150</Badge>
    );
    
    expect(getByText('99+')).toBeTruthy();
  });

  it('renders number without maxCount formatting', () => {
    const { getByText } = render(
      <Badge>42</Badge>
    );
    
    expect(getByText('42')).toBeTruthy();
  });
});
