import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1767Component } from './comp1767.component';

describe('Comp1767Component', () => {
  let component: Comp1767Component;
  let fixture: ComponentFixture<Comp1767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
