import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1950Component } from './comp1950.component';

describe('Comp1950Component', () => {
  let component: Comp1950Component;
  let fixture: ComponentFixture<Comp1950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
