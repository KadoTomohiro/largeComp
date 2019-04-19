import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp795Component } from './comp795.component';

describe('Comp795Component', () => {
  let component: Comp795Component;
  let fixture: ComponentFixture<Comp795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
