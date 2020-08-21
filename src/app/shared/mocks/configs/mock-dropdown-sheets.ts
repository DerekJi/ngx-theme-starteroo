import { IDropdownSheet } from '@core/models/dropdown-sheet.interface';

export const MockDropdownSheets: IDropdownSheet[] = [
  {
    sheetName: 'Teams',
    tileBackground: 'bg-indigo',
    tileIcon: 'fas fa-user-friends',
  },
  {
    sheetName: 'Projects',
    tileBackground: 'bg-teal',
    tileIcon: 'fas fa-project-diagram',
  },
  {
    sheetName: 'Tasks',
    tileBackground: 'bg-pink',
    tileIcon: 'fas fa-tasks',
  },
  {
    sheetName: 'Feeds',
    tileBackground: 'bg-yellow',
    tileIcon: 'fas fa-fire',
  },
  {
    sheetName: 'Files',
    tileBackground: 'bg-cyan',
    tileIcon: 'far file-alt',
  },
];
