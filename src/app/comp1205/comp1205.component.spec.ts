import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1205Component } from './comp1205.component';

describe('Comp1205Component', () => {
  let component: Comp1205Component;
  let fixture: ComponentFixture<Comp1205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
