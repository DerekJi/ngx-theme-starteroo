import { ITreeMenuNode } from './tree-menu-node.interface';

export interface ITreeMenu {
  title: string;
  nodes: ITreeMenuNode[];
}
