import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1065Component } from './comp1065.component';

describe('Comp1065Component', () => {
  let component: Comp1065Component;
  let fixture: ComponentFixture<Comp1065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
