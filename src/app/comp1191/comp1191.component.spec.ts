import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1191Component } from './comp1191.component';

describe('Comp1191Component', () => {
  let component: Comp1191Component;
  let fixture: ComponentFixture<Comp1191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
