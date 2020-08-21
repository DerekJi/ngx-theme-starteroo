export interface ITreeMenuNode {
  code?: string;
  icon?: string;
  level: number;
  displayName: string;
  displayOrder?: number;
  tooltip?: string;
  url: string;
  target?: string;

  nodes?: ITreeMenuNode[];
}
