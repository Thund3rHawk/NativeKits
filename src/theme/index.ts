import { Theme } from './types';

const theme: Theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    surface: '#F8F9FA',
    surfaceVariant: '#F2F2F7',
    text: '#1C1C1E',
    textSecondary: '#6C6C70',
    border: '#E5E5EA',
    outline: '#D1D1D6',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
  },
  typography: {
    fontFamily: 'System',
    fontSize: {
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
};

export default theme;
