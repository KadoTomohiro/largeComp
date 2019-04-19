import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1867Component } from './comp1867.component';

describe('Comp1867Component', () => {
  let component: Comp1867Component;
  let fixture: ComponentFixture<Comp1867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
