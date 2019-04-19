import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1644Component } from './comp1644.component';

describe('Comp1644Component', () => {
  let component: Comp1644Component;
  let fixture: ComponentFixture<Comp1644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
