import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1533Component } from './comp1533.component';

describe('Comp1533Component', () => {
  let component: Comp1533Component;
  let fixture: ComponentFixture<Comp1533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
