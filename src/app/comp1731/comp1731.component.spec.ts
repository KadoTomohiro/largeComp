import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1731Component } from './comp1731.component';

describe('Comp1731Component', () => {
  let component: Comp1731Component;
  let fixture: ComponentFixture<Comp1731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
