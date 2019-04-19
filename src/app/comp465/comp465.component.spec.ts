import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp465Component } from './comp465.component';

describe('Comp465Component', () => {
  let component: Comp465Component;
  let fixture: ComponentFixture<Comp465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
