import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1284Component } from './comp1284.component';

describe('Comp1284Component', () => {
  let component: Comp1284Component;
  let fixture: ComponentFixture<Comp1284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
