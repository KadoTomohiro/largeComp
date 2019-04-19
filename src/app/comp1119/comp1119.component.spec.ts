import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1119Component } from './comp1119.component';

describe('Comp1119Component', () => {
  let component: Comp1119Component;
  let fixture: ComponentFixture<Comp1119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
