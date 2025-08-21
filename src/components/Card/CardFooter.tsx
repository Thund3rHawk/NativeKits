import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { CardFooterProps } from './types';
import theme from '../../theme';

const CardFooter = ({
  children,
  style,
  showSeparator = false,
}: CardFooterProps): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      {showSeparator && <View style={styles.separator} />}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.sm,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginBottom: theme.spacing.sm,
  },
});

export default CardFooter;
