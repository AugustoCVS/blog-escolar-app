export interface ICtaMenu {
  title: string;
  description: string;
  icon: React.ReactNode;
  tagsList?: {
    id: number;
    name: string;
  }[]
}