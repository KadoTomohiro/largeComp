import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1919Component } from './comp1919.component';

describe('Comp1919Component', () => {
  let component: Comp1919Component;
  let fixture: ComponentFixture<Comp1919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
