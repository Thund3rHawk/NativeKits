import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { AccordionItemProps } from './types';
import theme from '../../theme';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isExpanded = false,
  onToggle,
  titleStyle,
  containerStyle,
  contentStyle,
  iconColor = theme.colors.primary,
  animationDuration = 300,
}) => {
  const handleToggle = () => {
    LayoutAnimation.configureNext({
      duration: animationDuration,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    });
    onToggle?.();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.header}
        onPress={handleToggle}
        activeOpacity={0.7}
      >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <View style={[styles.icon, { borderTopColor: iconColor }]}>
          <View
            style={[
              styles.iconArrow,
              {
                transform: [{ rotate: isExpanded ? '180deg' : '0deg' }],
                borderTopColor: iconColor,
              },
            ]}
          />
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <View style={[styles.content, contentStyle]}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    overflow: 'hidden',
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  icon: {
    width: 0,
    height: 0,
  },
  iconArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  content: {
    padding: theme.spacing.md,
    paddingTop: 0,
    backgroundColor: theme.colors.background,
  },
});

export default AccordionItem;