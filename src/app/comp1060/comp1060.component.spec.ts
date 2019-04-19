import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1060Component } from './comp1060.component';

describe('Comp1060Component', () => {
  let component: Comp1060Component;
  let fixture: ComponentFixture<Comp1060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
