import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavigatorComponent } from './left-navigator.component';

describe('LeftNavigatorComponent', () => {
  let component: LeftNavigatorComponent;
  let fixture: ComponentFixture<LeftNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
