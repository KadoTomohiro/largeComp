import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1414Component } from './comp1414.component';

describe('Comp1414Component', () => {
  let component: Comp1414Component;
  let fixture: ComponentFixture<Comp1414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
