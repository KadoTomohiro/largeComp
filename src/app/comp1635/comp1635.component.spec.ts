import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1635Component } from './comp1635.component';

describe('Comp1635Component', () => {
  let component: Comp1635Component;
  let fixture: ComponentFixture<Comp1635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
