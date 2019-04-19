import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1751Component } from './comp1751.component';

describe('Comp1751Component', () => {
  let component: Comp1751Component;
  let fixture: ComponentFixture<Comp1751Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1751Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1751Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
