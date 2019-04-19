import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1423Component } from './comp1423.component';

describe('Comp1423Component', () => {
  let component: Comp1423Component;
  let fixture: ComponentFixture<Comp1423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
