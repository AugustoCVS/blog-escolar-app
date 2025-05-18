export interface ICtaOptions {
  imgUrl?: string;
  alt?: string;
  title?: string;
  addressDescription?: string;
  rating?: number;
  maxRating?: number;
  distance?: string;
  bgImageColor?: string;
  maxWidth?: number;
  maxHeight?: number;
  onPress?: () => void;
}