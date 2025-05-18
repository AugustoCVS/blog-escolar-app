import { KeyboardTypeOptions } from "react-native";

export type InputProps = {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  label?: string;
  formatter?: (value: string) => string;
  secondInput?: boolean;
  icon?: React.ReactNode;
  onPress?: () => void;
};
