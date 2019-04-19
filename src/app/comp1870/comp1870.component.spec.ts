import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1870Component } from './comp1870.component';

describe('Comp1870Component', () => {
  let component: Comp1870Component;
  let fixture: ComponentFixture<Comp1870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
