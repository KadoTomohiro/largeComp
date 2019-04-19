import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1739Component } from './comp1739.component';

describe('Comp1739Component', () => {
  let component: Comp1739Component;
  let fixture: ComponentFixture<Comp1739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
