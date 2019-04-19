import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1986Component } from './comp1986.component';

describe('Comp1986Component', () => {
  let component: Comp1986Component;
  let fixture: ComponentFixture<Comp1986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
