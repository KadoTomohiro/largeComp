import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1640Component } from './comp1640.component';

describe('Comp1640Component', () => {
  let component: Comp1640Component;
  let fixture: ComponentFixture<Comp1640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
