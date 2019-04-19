import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1333Component } from './comp1333.component';

describe('Comp1333Component', () => {
  let component: Comp1333Component;
  let fixture: ComponentFixture<Comp1333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
