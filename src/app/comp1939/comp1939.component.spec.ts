import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1939Component } from './comp1939.component';

describe('Comp1939Component', () => {
  let component: Comp1939Component;
  let fixture: ComponentFixture<Comp1939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
