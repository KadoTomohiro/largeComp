import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1891Component } from './comp1891.component';

describe('Comp1891Component', () => {
  let component: Comp1891Component;
  let fixture: ComponentFixture<Comp1891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
