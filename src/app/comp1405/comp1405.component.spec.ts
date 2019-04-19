import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1405Component } from './comp1405.component';

describe('Comp1405Component', () => {
  let component: Comp1405Component;
  let fixture: ComponentFixture<Comp1405Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1405Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
