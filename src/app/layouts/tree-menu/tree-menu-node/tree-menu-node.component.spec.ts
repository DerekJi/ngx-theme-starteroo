import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeMenuNodeComponent } from './tree-menu-node.component';

describe('TreeMenuNodeComponent', () => {
  let component: TreeMenuNodeComponent;
  let fixture: ComponentFixture<TreeMenuNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeMenuNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeMenuNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
