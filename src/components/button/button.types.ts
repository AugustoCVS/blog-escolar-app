import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  children?: React.ReactNode;
  className?: string;
  onPress?: () => void;
  isFirstStyle?: boolean;
  disabled?: boolean;
  text?: string;
  textColor?: string;
  loading?: boolean;
  textSize?: string;
  textBold?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
};