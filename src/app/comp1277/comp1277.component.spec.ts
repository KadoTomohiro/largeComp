import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1277Component } from './comp1277.component';

describe('Comp1277Component', () => {
  let component: Comp1277Component;
  let fixture: ComponentFixture<Comp1277Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1277Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
