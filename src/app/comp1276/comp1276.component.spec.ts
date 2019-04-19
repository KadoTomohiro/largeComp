import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1276Component } from './comp1276.component';

describe('Comp1276Component', () => {
  let component: Comp1276Component;
  let fixture: ComponentFixture<Comp1276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
