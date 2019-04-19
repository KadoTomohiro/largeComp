import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1594Component } from './comp1594.component';

describe('Comp1594Component', () => {
  let component: Comp1594Component;
  let fixture: ComponentFixture<Comp1594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
