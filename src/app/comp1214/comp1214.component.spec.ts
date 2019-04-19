import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1214Component } from './comp1214.component';

describe('Comp1214Component', () => {
  let component: Comp1214Component;
  let fixture: ComponentFixture<Comp1214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
