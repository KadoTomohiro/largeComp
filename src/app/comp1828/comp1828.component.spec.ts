import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1828Component } from './comp1828.component';

describe('Comp1828Component', () => {
  let component: Comp1828Component;
  let fixture: ComponentFixture<Comp1828Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1828Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
