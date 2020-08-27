import { ITreeMenuNode } from "@core/models/menu-node.interface";

export const TreeMenuConfig: ITreeMenuNode[] = [
  {
    id: 't10',
    title: 'Tasks',
    tooltip: 'Scheduled Tasks',
    icon: 'fas fa-project-diagram',
    url: '#tasks',
  },
  {
    id: 't20',
    title: 'Users',
    icon: 'fas fa-users',
    url: '#users',
  },
  {
    id: 't30',
    title: 'Profile',
    icon: 'fas fa-cog',
    url: '#profile',
  },
  {
    id: 't30',
    title: 'System Admin',
    icon: 'fas fa-cog',
    children: [
      {
        id: 't41',
        title: 'Themes',
        icon: 'far fa-building',
        url: '#admin-themes',
      },
      {
        id: 't42',
        title: 'System Settings',
        icon: 'fas fa-cogs',
        url: '#admin-settings',
      },
    ]
  }

];
