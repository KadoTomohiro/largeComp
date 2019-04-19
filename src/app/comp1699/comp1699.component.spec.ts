import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1699Component } from './comp1699.component';

describe('Comp1699Component', () => {
  let component: Comp1699Component;
  let fixture: ComponentFixture<Comp1699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
