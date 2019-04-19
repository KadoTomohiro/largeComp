import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1678Component } from './comp1678.component';

describe('Comp1678Component', () => {
  let component: Comp1678Component;
  let fixture: ComponentFixture<Comp1678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
