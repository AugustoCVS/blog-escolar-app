export interface ICtaUser {
  title: string;
  description: string;
  icon: React.ReactNode;
  tagsList?: {
    id: number;
    name: string;
  }[]
}