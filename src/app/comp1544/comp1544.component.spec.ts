import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1544Component } from './comp1544.component';

describe('Comp1544Component', () => {
  let component: Comp1544Component;
  let fixture: ComponentFixture<Comp1544Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1544Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
