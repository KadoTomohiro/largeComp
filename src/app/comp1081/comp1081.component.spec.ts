import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1081Component } from './comp1081.component';

describe('Comp1081Component', () => {
  let component: Comp1081Component;
  let fixture: ComponentFixture<Comp1081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
