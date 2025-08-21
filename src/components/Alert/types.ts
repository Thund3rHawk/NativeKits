import { TextStyle, ViewStyle } from "react-native";

export type AlertType = 'success' | 'error' | 'warning' | 'info';

/**
 * Props for the Alert component.
 *
 * @remarks
 * Use these props to customize the appearance and behavior of the Alert component.
 *
 * @property children - The content to be displayed inside the alert.
 * @property type - The type of alert to display (e.g., success, error, warning, info).
 * @property message - The message text to display within the alert.
 * @property onClose - Callback function invoked when the alert is closed.
 * @property style - Custom style for the alert container.
 * @property textStyle - Custom style for the alert message text.
 */


export interface AlertProps {
  /**
   * The content to be displayed inside the card
   */
  children?: React.ReactNode
  
  type?: AlertType;
  message?: string | undefined;
  onClose?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}