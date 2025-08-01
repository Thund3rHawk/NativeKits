import React, { useState, Children, cloneElement, ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';
import { AccordionProps } from './types';
import AccordionItem from './AccordionItem';
import theme from '../../theme';

const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false,
  defaultExpandedItems = [],
  containerStyle,
  itemSpacing = theme.spacing.sm,
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(
    new Set(defaultExpandedItems)
  );

  const handleToggle = (index: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }

      return newSet;
    });
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === AccordionItem) {
          return cloneElement(child as ReactElement, {
            key: index,
            isExpanded: expandedItems.has(index),
            onToggle: () => handleToggle(index),
            containerStyle: [
              child.props.containerStyle,
              index < Children.count(children) - 1 && {
                marginBottom: itemSpacing,
              },
            ],
          });
        }
        return child;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Accordion;
