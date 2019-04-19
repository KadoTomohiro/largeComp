import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1399Component } from './comp1399.component';

describe('Comp1399Component', () => {
  let component: Comp1399Component;
  let fixture: ComponentFixture<Comp1399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
