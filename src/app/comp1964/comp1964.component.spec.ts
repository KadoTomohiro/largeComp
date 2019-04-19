import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1964Component } from './comp1964.component';

describe('Comp1964Component', () => {
  let component: Comp1964Component;
  let fixture: ComponentFixture<Comp1964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
