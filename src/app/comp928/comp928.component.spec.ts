import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp928Component } from './comp928.component';

describe('Comp928Component', () => {
  let component: Comp928Component;
  let fixture: ComponentFixture<Comp928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
