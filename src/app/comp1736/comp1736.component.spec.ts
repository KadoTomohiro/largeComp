import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1736Component } from './comp1736.component';

describe('Comp1736Component', () => {
  let component: Comp1736Component;
  let fixture: ComponentFixture<Comp1736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
