export interface IInfluencerCard {
  testID?: string;
  imageSrc?: string;
  alt?: string;
  bgColor?: string;
  title?: string;
  views?: string;
  lastUpdate?: string;
  isFollowing?: boolean;
  action?: () => void;
}