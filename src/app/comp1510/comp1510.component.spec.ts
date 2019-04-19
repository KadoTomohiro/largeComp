import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1510Component } from './comp1510.component';

describe('Comp1510Component', () => {
  let component: Comp1510Component;
  let fixture: ComponentFixture<Comp1510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
