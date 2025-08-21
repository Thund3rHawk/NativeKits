import { TextStyle, ViewStyle } from "react-native";

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps {
  type?: AlertType;
  message?: string | undefined;
  onClose?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode
}