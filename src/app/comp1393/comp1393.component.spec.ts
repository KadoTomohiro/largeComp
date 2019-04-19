import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1393Component } from './comp1393.component';

describe('Comp1393Component', () => {
  let component: Comp1393Component;
  let fixture: ComponentFixture<Comp1393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
