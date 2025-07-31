import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
    type?: AlertType;
    message: string;
    onClose?: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const typeColors: Record<AlertType, string> = {
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
    info: '#2196F3',
};

export const Alert: React.FC<AlertProps> = ({
    type = 'info',
    message,
    onClose,
    style,
    textStyle,
}) => {
    return (
        <View style={[styles.container, { backgroundColor: typeColors[type] }, style]}>
            <Text style={[styles.message, textStyle]}>{message}</Text>
            {onClose && (
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Text style={styles.closeText}>×</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        margin: 8,
    },
    message: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    closeButton: {
        marginLeft: 12,
        padding: 4,
    },
    closeText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Alert;