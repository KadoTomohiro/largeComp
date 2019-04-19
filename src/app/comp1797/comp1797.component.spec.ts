import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1797Component } from './comp1797.component';

describe('Comp1797Component', () => {
  let component: Comp1797Component;
  let fixture: ComponentFixture<Comp1797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
