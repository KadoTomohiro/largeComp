import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1783Component } from './comp1783.component';

describe('Comp1783Component', () => {
  let component: Comp1783Component;
  let fixture: ComponentFixture<Comp1783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
