import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1413Component } from './comp1413.component';

describe('Comp1413Component', () => {
  let component: Comp1413Component;
  let fixture: ComponentFixture<Comp1413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
