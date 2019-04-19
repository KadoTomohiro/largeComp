import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1801Component } from './comp1801.component';

describe('Comp1801Component', () => {
  let component: Comp1801Component;
  let fixture: ComponentFixture<Comp1801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
