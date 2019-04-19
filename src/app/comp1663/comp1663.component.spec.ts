import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1663Component } from './comp1663.component';

describe('Comp1663Component', () => {
  let component: Comp1663Component;
  let fixture: ComponentFixture<Comp1663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
