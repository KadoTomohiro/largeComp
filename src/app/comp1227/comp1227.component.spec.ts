import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1227Component } from './comp1227.component';

describe('Comp1227Component', () => {
  let component: Comp1227Component;
  let fixture: ComponentFixture<Comp1227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
