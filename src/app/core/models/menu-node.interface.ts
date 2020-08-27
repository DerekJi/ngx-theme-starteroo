export interface ITreeMenuNode {
  id: number | string;
  title: string;
  url?: string;
  icon?: string;
  iconType?: 'font-awesome-4' | 'font-awesome-5';
  tooltip?: string;
  children?: ITreeMenuNode[];
}
