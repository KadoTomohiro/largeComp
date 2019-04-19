import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp674Component } from './comp674.component';

describe('Comp674Component', () => {
  let component: Comp674Component;
  let fixture: ComponentFixture<Comp674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
