import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp541Component } from './comp541.component';

describe('Comp541Component', () => {
  let component: Comp541Component;
  let fixture: ComponentFixture<Comp541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
