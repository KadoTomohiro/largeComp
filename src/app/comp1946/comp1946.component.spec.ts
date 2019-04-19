import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1946Component } from './comp1946.component';

describe('Comp1946Component', () => {
  let component: Comp1946Component;
  let fixture: ComponentFixture<Comp1946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
