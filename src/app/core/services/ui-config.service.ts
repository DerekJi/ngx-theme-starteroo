import { Injectable } from '@angular/core';

import { IDropdownSheet } from '@core/models/dropdown-sheet.interface';
import { IDropdownMenuItem } from '@core/models/dropdown-menu-item.interface';
import { IDropdownListItem } from '@core/models/dropdown-list-item.interface';
import { MockDropdownActivities } from '@shared/mocks/configs/mock-dropdown-activities';
import { MockDropdownMessages } from '@shared/mocks/configs/mock-dropdown-messages';
import { MockDropdownSheets } from '@shared/mocks/configs/mock-dropdown-sheets';
import { MockDropdownMenu } from '@shared/mocks/configs/mock-dropdown-menu';

@Injectable({
  providedIn: 'root'
})
export class UiConfigService {

  public getSheets(): IDropdownSheet[] { return MockDropdownSheets; }

  public getHeaderMenu(): IDropdownMenuItem[] { return MockDropdownMenu; }

  public getActivities(): IDropdownListItem[] { return MockDropdownActivities; }
  public getMessages(): IDropdownListItem[] { return MockDropdownMessages; }

  constructor() { }

}
