import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1653Component } from './comp1653.component';

describe('Comp1653Component', () => {
  let component: Comp1653Component;
  let fixture: ComponentFixture<Comp1653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
