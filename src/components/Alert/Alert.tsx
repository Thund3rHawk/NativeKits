import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AlertProps } from './types';
import { typeBorderColors, typeColors } from './theme';

export const Alert: React.FC<AlertProps> = ({
  children,
  type = 'info',
  message,
  onClose,
  style,
  textStyle,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: typeColors[type],
          borderColor: typeBorderColors[type],
          borderWidth: 1,
        },
        style,
      ]}
    >
      {children}
      <Text
        style={[styles.message, { color: typeBorderColors[type] }, textStyle]}
      >
        {message}
      </Text>
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
    borderRadius: 6,
    margin: 8,
  },
  message: {
    flex: 1,
    fontSize: 16,
  },
  closeButton: {
    marginLeft: 12,
    padding: 4,
    color: 'black',
  },
  closeText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Alert;
