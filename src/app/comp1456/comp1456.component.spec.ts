import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1456Component } from './comp1456.component';

describe('Comp1456Component', () => {
  let component: Comp1456Component;
  let fixture: ComponentFixture<Comp1456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
