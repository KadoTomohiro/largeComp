import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1379Component } from './comp1379.component';

describe('Comp1379Component', () => {
  let component: Comp1379Component;
  let fixture: ComponentFixture<Comp1379Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
