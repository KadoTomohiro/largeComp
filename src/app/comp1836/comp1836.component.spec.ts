import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1836Component } from './comp1836.component';

describe('Comp1836Component', () => {
  let component: Comp1836Component;
  let fixture: ComponentFixture<Comp1836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
