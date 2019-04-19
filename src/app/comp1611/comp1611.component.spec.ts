import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1611Component } from './comp1611.component';

describe('Comp1611Component', () => {
  let component: Comp1611Component;
  let fixture: ComponentFixture<Comp1611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
