import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1520Component } from './comp1520.component';

describe('Comp1520Component', () => {
  let component: Comp1520Component;
  let fixture: ComponentFixture<Comp1520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
