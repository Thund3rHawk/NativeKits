import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { CardHeaderProps } from './types';
import theme from '../../theme';

const CardHeader = ({
  title,
  subtitle,
  children,
  avatar,
  action,
  style,
  titleStyle,
  subtitleStyle,
}: CardHeaderProps): JSX.Element => {
  if (children) {
    return <View style={[styles.container, style]}>{children}</View>;
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        {avatar && <View style={styles.avatar}>{avatar}</View>}
        <View style={styles.textContainer}>
          {title && (
            <Text style={[styles.title, titleStyle]} numberOfLines={1}>
              {title}
            </Text>
          )}
          {subtitle && (
            <Text style={[styles.subtitle, subtitleStyle]} numberOfLines={2}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>
      {action && <View style={styles.action}>{action}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing.sm,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.normal,
    color: theme.colors.textSecondary,
    lineHeight: 18,
  },
  action: {
    marginLeft: theme.spacing.sm,
  },
});

export default CardHeader;
