import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp707Component } from './comp707.component';

describe('Comp707Component', () => {
  let component: Comp707Component;
  let fixture: ComponentFixture<Comp707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
