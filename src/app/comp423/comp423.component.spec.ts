import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp423Component } from './comp423.component';

describe('Comp423Component', () => {
  let component: Comp423Component;
  let fixture: ComponentFixture<Comp423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
