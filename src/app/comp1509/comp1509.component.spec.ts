import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1509Component } from './comp1509.component';

describe('Comp1509Component', () => {
  let component: Comp1509Component;
  let fixture: ComponentFixture<Comp1509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
