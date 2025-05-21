export type HeaderProps = {
  value: string;
  isAdmin: boolean;
  setValue: (value: string) => void;
  name: string;
  createPost: () => void;
}