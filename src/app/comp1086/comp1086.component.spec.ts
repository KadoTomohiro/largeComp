import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1086Component } from './comp1086.component';

describe('Comp1086Component', () => {
  let component: Comp1086Component;
  let fixture: ComponentFixture<Comp1086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
