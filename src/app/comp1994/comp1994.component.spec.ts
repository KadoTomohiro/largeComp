import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1994Component } from './comp1994.component';

describe('Comp1994Component', () => {
  let component: Comp1994Component;
  let fixture: ComponentFixture<Comp1994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
