import { ITreeMenuNode } from "@core/models/menu-node.interface";

export const SecondaryMenuConfig: ITreeMenuNode[] = [
  {
    id: 'st10',
    title: 'Jobs',
    tooltip: 'Planned Jobs',
    icon: 'fas fa-project-diagram',
    url: '#jobs',
    children: [
      {
        id: 'st11',
        title: 'List',
        icon: 'far fa-building',
        url: '#jobs-list',
      },
      {
        id: 'st12',
        title: 'Details',
        icon: 'fas fa-cogs',
        url: '#job-details',
      },
    ]
  },
  {
    id: 'st20',
    title: 'Messages',
    icon: 'fa fa-envelope',
    url: '#messages',
    children: [
      {
        id: 'st21',
        title: 'List',
        icon: 'fa fa-envelope',
        url: '#messages-list',
      },
      {
        id: 'st22',
        title: 'Inbox',
        icon: 'fa fa-envelope',
        url: '#messages-inbox',
      },
      {
        id: 'st23',
        title: 'Sent',
        icon: 'fa fa-envelope',
        url: '#messages-sent',
      },
      {
        id: 'st24',
        title: 'Draft',
        icon: 'fa fa-envelope',
        url: '#messages-draft',
      },
    ]
  },
  {
    id: 'st30',
    title: 'Files',
    icon: 'far fa-file',
    children: [
      {
        id: 'st31',
        title: 'High Level Design',
        icon: 'far fa-file',
        url: '#files-hld',
      },
      {
        id: 'st32',
        title: 'Specifications',
        icon: 'far fa-file',
        url: '#files-specs',
      },
      {
        id: 'st33',
        title: 'Requirements',
        icon: 'far fa-file',
        url: '#files-requirements',
      },
      {
        id: 'st34',
        title: 'Databases',
        icon: 'far fa-file',
        children: [
          {
            id: 'st34-1',
            title: 'MS Sql Server',
            icon: 'far fa-file',
            url: '#files-mssql',
          },
          {
            id: 'st34-2',
            title: 'Postgres',
            icon: 'far fa-file',
            url: '#files-postgres',
          },
          {
            id: 'st34-3',
            title: 'DynamoDB',
            icon: 'far fa-file',
            url: '#files-dynamo',
          },
        ]
      },
      {
        id: 'st35',
        title: 'Business Logic',
        icon: 'far fa-file',
        children: [
          {
            id: 'st35-1',
            title: 'Users & Roles',
            icon: 'far fa-file',
            url: '#files-users',
          },
          {
            id: 'st35-2',
            title: 'Permissions',
            icon: 'far fa-file',
            url: '#files-permissions',
          },
          {
            id: 'st35-3',
            title: 'Project Validations',
            icon: 'far fa-file',
            url: '#files-proj-valid',
          },
          {
            id: 'st35-4',
            title: 'Task Validations',
            icon: 'far fa-file',
            url: '#files-task-valid',
          },
        ]
      },
      {
        id: 'st36',
        title: 'UAT',
        icon: 'far fa-file',
        url: '#files-uat',
      },
    ]
  },
  {
    id: 'st40',
    title: 'Profile',
    icon: 'fas fa-user-circle',
    url: '#profile',
  },

];
