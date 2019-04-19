import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp688Component } from './comp688.component';

describe('Comp688Component', () => {
  let component: Comp688Component;
  let fixture: ComponentFixture<Comp688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
