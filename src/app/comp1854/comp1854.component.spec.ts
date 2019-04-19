import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1854Component } from './comp1854.component';

describe('Comp1854Component', () => {
  let component: Comp1854Component;
  let fixture: ComponentFixture<Comp1854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
