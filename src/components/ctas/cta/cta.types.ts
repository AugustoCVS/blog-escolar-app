export interface IRoot {
  children: React.ReactNode;
  isCoupon?: boolean;
  discount?: number;
  onPress?: () => void;
  height?: string;
  background?: string;
  bgColor?: string;
  width?: string;
  border?: string;
  borderRadius?: string;
}

export interface IImage {
  source: string;
  bgColor: string;
  alt: string;
  maxWidth?: number;
  maxHeight?: number;
}