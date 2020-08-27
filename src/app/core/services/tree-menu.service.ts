import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { BaseListBehaviorSubjectService } from './base-list-behavior-subject.service';
import { ITreeMenuNode } from '@core/models/menu-node.interface';
import { TreeMenuConfig } from '@core/configs/tree-menu.config';

@Injectable({
  providedIn: 'root'
})
export class TreeMenuService extends BaseListBehaviorSubjectService<ITreeMenuNode> {

  fetchValues(): Observable<ITreeMenuNode[]> {
    return of(TreeMenuConfig);
  }

  constructor() { super(); }

}
