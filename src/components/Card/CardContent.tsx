import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { CardContentProps } from './types';
import theme from '../../theme';

const CardContent = ({
  children,
  style,
}: CardContentProps): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.xs,
  },
});

export default CardContent;
