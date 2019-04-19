import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1199Component } from './comp1199.component';

describe('Comp1199Component', () => {
  let component: Comp1199Component;
  let fixture: ComponentFixture<Comp1199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
