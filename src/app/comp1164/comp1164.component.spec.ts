import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1164Component } from './comp1164.component';

describe('Comp1164Component', () => {
  let component: Comp1164Component;
  let fixture: ComponentFixture<Comp1164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
