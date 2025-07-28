import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager, } from 'react-native';
import theme from '../../theme';
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
const AccordionItem = ({ title, children, isExpanded = false, onToggle, titleStyle, containerStyle, contentStyle, iconColor = theme.colors.primary, animationDuration = 300, }) => {
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
        onToggle === null || onToggle === void 0 ? void 0 : onToggle();
    };
    return (_jsxs(View, { style: [styles.container, containerStyle], children: [_jsxs(TouchableOpacity, { style: styles.header, onPress: handleToggle, activeOpacity: 0.7, children: [_jsx(Text, { style: [styles.title, titleStyle], children: title }), _jsx(View, { style: [styles.icon, { borderTopColor: iconColor }], children: _jsx(View, { style: [
                                styles.iconArrow,
                                {
                                    transform: [{ rotate: isExpanded ? '180deg' : '0deg' }],
                                    borderTopColor: iconColor,
                                },
                            ] }) })] }), isExpanded && (_jsx(View, { style: [styles.content, contentStyle], children: children }))] }));
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
