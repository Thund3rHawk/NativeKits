import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, Children, cloneElement } from 'react';
import { View, StyleSheet } from 'react-native';
import AccordionItem from './AccordionItem';
import theme from '../../theme';
const Accordion = ({ children, allowMultiple = false, defaultExpandedItems = [], containerStyle, itemSpacing = theme.spacing.sm, }) => {
    const [expandedItems, setExpandedItems] = useState(new Set(defaultExpandedItems));
    const handleToggle = (index) => {
        setExpandedItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            }
            else {
                if (!allowMultiple) {
                    newSet.clear();
                }
                newSet.add(index);
            }
            return newSet;
        });
    };
    return (_jsx(View, { style: [styles.container, containerStyle], children: Children.map(children, (child, index) => {
            if (React.isValidElement(child) && child.type === AccordionItem) {
                return cloneElement(child, {
                    key: index,
                    isExpanded: expandedItems.has(index),
                    onToggle: () => handleToggle(index),
                    containerStyle: [
                        child.props.containerStyle,
                        index < Children.count(children) - 1 && { marginBottom: itemSpacing },
                    ],
                });
            }
            return child;
        }) }));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default Accordion;
