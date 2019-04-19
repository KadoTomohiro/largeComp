import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1047Component } from './comp1047.component';

describe('Comp1047Component', () => {
  let component: Comp1047Component;
  let fixture: ComponentFixture<Comp1047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
