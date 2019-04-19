import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1776Component } from './comp1776.component';

describe('Comp1776Component', () => {
  let component: Comp1776Component;
  let fixture: ComponentFixture<Comp1776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
