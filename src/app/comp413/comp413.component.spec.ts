import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp413Component } from './comp413.component';

describe('Comp413Component', () => {
  let component: Comp413Component;
  let fixture: ComponentFixture<Comp413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
