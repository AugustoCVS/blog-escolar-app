export interface IHorizontalList<T> {
  data: T[];
  keyExtractor: (item: T) => string;
  children: (item: T) => React.ReactNode;
  className?: string;
}