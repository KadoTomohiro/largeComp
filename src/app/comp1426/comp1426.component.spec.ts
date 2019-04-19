import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1426Component } from './comp1426.component';

describe('Comp1426Component', () => {
  let component: Comp1426Component;
  let fixture: ComponentFixture<Comp1426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
