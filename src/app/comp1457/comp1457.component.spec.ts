import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1457Component } from './comp1457.component';

describe('Comp1457Component', () => {
  let component: Comp1457Component;
  let fixture: ComponentFixture<Comp1457Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1457Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
