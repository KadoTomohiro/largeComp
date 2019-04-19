import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp273Component } from './comp273.component';

describe('Comp273Component', () => {
  let component: Comp273Component;
  let fixture: ComponentFixture<Comp273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
