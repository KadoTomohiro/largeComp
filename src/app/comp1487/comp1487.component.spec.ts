import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1487Component } from './comp1487.component';

describe('Comp1487Component', () => {
  let component: Comp1487Component;
  let fixture: ComponentFixture<Comp1487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
