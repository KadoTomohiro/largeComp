import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1230Component } from './comp1230.component';

describe('Comp1230Component', () => {
  let component: Comp1230Component;
  let fixture: ComponentFixture<Comp1230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
