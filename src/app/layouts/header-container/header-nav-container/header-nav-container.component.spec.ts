import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavContainerComponent } from './header-nav-container.component';

describe('HeaderNavContainerComponent', () => {
  let component: HeaderNavContainerComponent;
  let fixture: ComponentFixture<HeaderNavContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
