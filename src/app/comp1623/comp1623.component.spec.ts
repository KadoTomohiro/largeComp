import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1623Component } from './comp1623.component';

describe('Comp1623Component', () => {
  let component: Comp1623Component;
  let fixture: ComponentFixture<Comp1623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
