import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1777Component } from './comp1777.component';

describe('Comp1777Component', () => {
  let component: Comp1777Component;
  let fixture: ComponentFixture<Comp1777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
