import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1089Component } from './comp1089.component';

describe('Comp1089Component', () => {
  let component: Comp1089Component;
  let fixture: ComponentFixture<Comp1089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
