import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1651Component } from './comp1651.component';

describe('Comp1651Component', () => {
  let component: Comp1651Component;
  let fixture: ComponentFixture<Comp1651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
