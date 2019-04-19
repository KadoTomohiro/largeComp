import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1545Component } from './comp1545.component';

describe('Comp1545Component', () => {
  let component: Comp1545Component;
  let fixture: ComponentFixture<Comp1545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
