import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1524Component } from './comp1524.component';

describe('Comp1524Component', () => {
  let component: Comp1524Component;
  let fixture: ComponentFixture<Comp1524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
