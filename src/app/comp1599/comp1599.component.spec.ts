import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1599Component } from './comp1599.component';

describe('Comp1599Component', () => {
  let component: Comp1599Component;
  let fixture: ComponentFixture<Comp1599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
