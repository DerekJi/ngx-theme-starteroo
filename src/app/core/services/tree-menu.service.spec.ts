/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TreeMenuService } from './tree-menu.service';

describe('Service: TreeMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeMenuService]
    });
  });

  it('should ...', inject([TreeMenuService], (service: TreeMenuService) => {
    expect(service).toBeTruthy();
  }));
});
