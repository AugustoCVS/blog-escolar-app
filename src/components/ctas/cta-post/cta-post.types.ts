export interface ICtaPost {
  imgUrl?: string;
  alt?: string;
  title?: string;
  discount?: number;
  imageBgColor?: string;
  firstDescription?: string;
  secondDescription?: string;
  expirationDate?: number;
  onPress?: () => void;
}