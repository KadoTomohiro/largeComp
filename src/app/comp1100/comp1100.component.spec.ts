import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1100Component } from './comp1100.component';

describe('Comp1100Component', () => {
  let component: Comp1100Component;
  let fixture: ComponentFixture<Comp1100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
