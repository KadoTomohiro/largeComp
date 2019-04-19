import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1744Component } from './comp1744.component';

describe('Comp1744Component', () => {
  let component: Comp1744Component;
  let fixture: ComponentFixture<Comp1744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
