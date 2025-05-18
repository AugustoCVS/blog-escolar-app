export interface ITags {
  isSelected?: boolean;
  name: string;
  action: () => void;
  border?: string;
  textColor?: string;
  bgColor?: string;
  bold?: string;
}