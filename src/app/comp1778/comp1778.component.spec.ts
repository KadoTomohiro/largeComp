import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1778Component } from './comp1778.component';

describe('Comp1778Component', () => {
  let component: Comp1778Component;
  let fixture: ComponentFixture<Comp1778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
