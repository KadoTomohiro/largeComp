import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1430Component } from './comp1430.component';

describe('Comp1430Component', () => {
  let component: Comp1430Component;
  let fixture: ComponentFixture<Comp1430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
