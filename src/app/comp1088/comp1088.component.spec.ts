import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1088Component } from './comp1088.component';

describe('Comp1088Component', () => {
  let component: Comp1088Component;
  let fixture: ComponentFixture<Comp1088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
