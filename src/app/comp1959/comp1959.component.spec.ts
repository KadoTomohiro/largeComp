import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1959Component } from './comp1959.component';

describe('Comp1959Component', () => {
  let component: Comp1959Component;
  let fixture: ComponentFixture<Comp1959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
