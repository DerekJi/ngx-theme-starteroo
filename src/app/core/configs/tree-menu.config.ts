import { ITreeMenuNode } from "@core/models/menu-node.interface";

export const TreeMenuConfig: ITreeMenuNode[] = [
  {
    id: 't00',  // Special ID for Home or Dashboard
    title: 'Home',
    tooltip: 'Home',
    icon: 'fas fa-home',
    url: '/',
  },
  {
    id: 't10',
    title: 'Tasks',
    tooltip: 'Scheduled Tasks',
    icon: 'fas fa-project-diagram',
    url: '#tasks',
    children: [
      {
        id: 't11',
        title: 'List',
        icon: 'far fa-building',
        url: '#tasks-list',
      },
      {
        id: 't12',
        title: 'Details',
        icon: 'fas fa-cogs',
        url: '#task-details',
      },
    ]
  },
  {
    id: 't20',
    title: 'Users',
    icon: 'fas fa-users',
    url: '#users',
    children: [
      {
        id: 't21',
        title: 'List',
        icon: 'far fa-building',
        url: '#users-list',
      },
      {
        id: 't22',
        title: 'Standard Users',
        icon: 'fas fa-users',
        url: '#standard-users',
      },
      {
        id: 't23',
        title: 'Power Users',
        icon: 'fas fa-users',
        url: '#power-users',
      },
      {
        id: 't24',
        title: 'Admin Users',
        icon: 'fas fa-users',
        url: '#admin-users',
      },
    ]
  },
  {
    id: 't30',
    title: 'Projects',
    icon: 'fas fa-cog',
    children: [
      {
        id: 't31',
        title: 'List',
        icon: 'far fa-building',
        url: '#admin-themes',
      },
      {
        id: 't32',
        title: 'Details',
        icon: 'fas fa-cogs',
        url: '#admin-settings',
      },
    ]
  },
  {
    id: 't40',
    title: 'Profile',
    icon: 'fas fa-user-circle',
    url: '#profile',
  },

];
