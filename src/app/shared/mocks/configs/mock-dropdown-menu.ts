import { IDropdownMenuItem } from '@core/models/dropdown-menu-item.interface';

export const MockDropdownMenu: IDropdownMenuItem[] = [
  { name: 'Profile', icon: 'fas fa-user-circle', url: '' },
  { name: 'Logout', icon: 'fas fa-sign-out-alt', url: '' },
  { divider: true },
  { name: 'Help Center', icon: '', url: '' },
  { name: 'Ask Forum', icon: '', url: '' },
  { name: 'Keyboard Shortcuts', icon: '', url: '' },
];
