export interface IRoot {
  children: React.ReactNode;
  shouldHaveItensCentered?: boolean;
  testID?: string;
  onPress?: () => void;
  maxWidth?: number;
  maxHeight?: number;
  minHeight?: number;
}

export interface IImage {
  children?: React.ReactNode;
  testID?: string;
  className?: string;
  source: string;
  alt: string;
  bgColor?: string;
}

export interface ITextComponent {
  children?: React.ReactNode;
  testID?: string;
  highlightedText?: string;
  isHighlightedTextBold?: boolean;
  isDarkText?: boolean;
  textSize?: string;
  textColor?: string;
  text?: string;
  highlightedTextColor?: string;
  textWidth?: string;
  bold?: string;
}

export interface ITag {
  children?: React.ReactNode;
  testID?: string;
  text?: string;
  shouldBeFixed?: boolean;
  tagBackground?: string;
  shouldHaveBorder?: boolean;
  backgroundTagSize?: number;
  shouldRenderTag?: boolean;
}

export interface IDescription {
  children?: React.ReactNode;
  testID?: string;
  isSpaceBetween?: boolean;
  shouldHaveItensCentered?: boolean;
  marginTop?: number;
  isRow?: boolean;
  gap?: string;
}

